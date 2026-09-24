import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useScroll } from 'framer-motion';

/**
 * AnimatedScrollGallery - Interactive Dynamic Focal Scroll Gallery
 * 
 * Features:
 * - Pinned 3x3 interactive scroll gallery
 * - Whichever tile the user clicks becomes the active focal image
 * - The selected image is ALWAYS visible inside its card (never black) with a glowing white frame
 * - As the user scrolls, THAT selected image smoothly expands to 100% full screen
 * - The remaining 8 images spread away in 3D and fade out
 */
export default function AnimatedScrollGallery({
  images = [],
  gap = 24,
  padding = 32,
  radius = 20,
  pinDistance = 250, // in vh
  backgroundColor = '#080808'
}) {
  const wrapperRef = useRef(null);
  const gridRef = useRef(null);

  // Active focal image index (default is 4, the center tile)
  const [activeFocalIndex, setActiveFocalIndex] = useState(4);

  // Track scroll progress along the pinned container
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end']
  });

  const [progress, setProgress] = useState(0);
  const [gridMetrics, setGridMetrics] = useState({
    width: 0,
    height: 0,
    cellWidth: 0,
    cellHeight: 0
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Responsive Grid Measurement with ResizeObserver
  const measureGrid = useCallback(() => {
    const el = gridRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nextWidth = rect.width;
    const nextHeight = rect.height;
    if (nextWidth === 0 || nextHeight === 0) return;
    const nextCellWidth = Math.max(0, (nextWidth - 2 * gap) / 3);
    const nextCellHeight = Math.max(0, (nextHeight - 2 * gap) / 3);

    setGridMetrics({
      width: nextWidth,
      height: nextHeight,
      cellWidth: nextCellWidth,
      cellHeight: nextCellHeight
    });
  }, [gap]);

  useEffect(() => {
    measureGrid();
    const rafId = requestAnimationFrame(measureGrid);
    const timer = setTimeout(measureGrid, 120);

    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined' && gridRef.current) {
      resizeObserver = new ResizeObserver(() => {
        measureGrid();
      });
      resizeObserver.observe(gridRef.current);
    }

    window.addEventListener('resize', measureGrid);
    window.addEventListener('orientationchange', measureGrid);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', measureGrid);
      window.removeEventListener('orientationchange', measureGrid);
    };
  }, [measureGrid]);

  // Exactly 9 items for the 3x3 grid
  const renderImages = useMemo(() => {
    if (!images || images.length === 0) return [];
    if (images.length === 9) return images;
    const list = [];
    for (let i = 0; i < 9; i++) {
      list.push(images[i % images.length]);
    }
    return list;
  }, [images]);

  // Coordinates of the active focal image
  const focalIndex = Math.min(renderImages.length - 1, Math.max(0, activeFocalIndex));
  const focalRow = Math.floor(focalIndex / 3);
  const focalCol = focalIndex % 3;

  const clampedProgress = Math.max(0, Math.min(1, progress));

  // Ease In-Out animation progress
  const animationProgress = useMemo(() => {
    if (clampedProgress < 0.5) return 4 * clampedProgress * clampedProgress * clampedProgress;
    return 1 - Math.pow(-2 * clampedProgress + 2, 3) / 2;
  }, [clampedProgress]);

  // Calculate position & scale for outer images relative to focal position
  const getImageStyle = useCallback((index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const deltaRow = row - focalRow;
    const deltaCol = col - focalCol;

    // The active focal image:
    // When progress <= 0.08, keep it completely visible in the grid (so it's NEVER black).
    // As it expands (progress > 0.08), the expanding overlay takes over.
    if (index === focalIndex) {
      return {
        transformOrigin: 'top left',
        opacity: animationProgress > 0.08 ? 0 : 1,
        zIndex: 1,
        cursor: 'pointer'
      };
    }

    const startLeft = col * (gridMetrics.cellWidth + gap);
    const startTop = row * (gridMetrics.cellHeight + gap);
    const safeCellWidth = gridMetrics.cellWidth || 1;
    const safeCellHeight = gridMetrics.cellHeight || 1;

    const scaleXTarget = gridMetrics.width / safeCellWidth;
    const scaleYTarget = gridMetrics.height / safeCellHeight;
    const currentScaleX = 1 + (scaleXTarget - 1) * animationProgress;
    const currentScaleY = 1 + (scaleYTarget - 1) * animationProgress;

    const finalLeft = deltaCol * (gridMetrics.width + gap);
    const finalTop = deltaRow * (gridMetrics.height + gap);

    const moveX = (finalLeft - startLeft) * animationProgress;
    const moveY = (finalTop - startTop) * animationProgress;

    return {
      transformOrigin: 'top left',
      transform: `translate3d(${moveX}px, ${moveY}px, 0px) scale(${currentScaleX}, ${currentScaleY})`,
      opacity: Math.max(0, 1 - animationProgress * 1.3),
      zIndex: 10,
      cursor: 'pointer',
      pointerEvents: animationProgress > 0.75 ? 'none' : 'auto'
    };
  }, [animationProgress, focalCol, focalIndex, focalRow, gap, gridMetrics]);

  // Expanding focal overlay style (starts from clicked tile position and expands to fill screen)
  const focalOverlayStyle = useMemo(() => {
    if (renderImages.length === 0) return { display: 'none' };

    const safeCellWidth = gridMetrics.cellWidth || (gridMetrics.width ? (gridMetrics.width - 2 * gap) / 3 : 0);
    const safeCellHeight = gridMetrics.cellHeight || (gridMetrics.height ? (gridMetrics.height - 2 * gap) / 3 : 0);

    const startLeft = focalCol * (safeCellWidth + gap);
    const startTop = focalRow * (safeCellHeight + gap);
    const startWidth = safeCellWidth;
    const startHeight = safeCellHeight;

    const targetLeft = 0;
    const targetTop = 0;
    const targetWidth = gridMetrics.width;
    const targetHeight = gridMetrics.height;

    const currentLeft = startLeft + (targetLeft - startLeft) * animationProgress;
    const currentTop = startTop + (targetTop - startTop) * animationProgress;
    const currentWidth = startWidth + (targetWidth - startWidth) * animationProgress;
    const currentHeight = startHeight + (targetHeight - startHeight) * animationProgress;

    // If gridMetrics aren't ready yet and animation hasn't started, let the grid tile show
    if (animationProgress === 0 && (!safeCellWidth || !safeCellHeight)) {
      return { display: 'none' };
    }

    return {
      position: 'absolute',
      left: currentLeft,
      top: currentTop,
      width: currentWidth,
      height: currentHeight,
      borderRadius: radius * (1 - animationProgress * 0.8),
      overflow: 'hidden',
      zIndex: 40,
      opacity: 1,
      boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s ease'
    };
  }, [animationProgress, focalCol, focalRow, gap, gridMetrics, radius, renderImages.length]);

  const focalImage = renderImages[focalIndex];

  const handleTileClick = (index) => {
    setActiveFocalIndex(index);
  };

  return (
    <div 
      ref={wrapperRef} 
      className="animated-scroll-gallery-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        height: `${pinDistance}vh`,
        backgroundColor
      }}
    >
      {/* Sticky Fullscreen Stage */}
      <section 
        className="animated-gallery-sticky-stage"
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh',
          minHeight: '100vh',
          overflow: 'hidden',
          backgroundColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* 3x3 Grid Stage */}
        <div
          ref={gridRef}
          className="animated-gallery-3x3-grid"
          style={{
            display: 'grid',
            position: 'absolute',
            inset: `${padding}px`,
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: `${gap}px`
          }}
        >
          {/* 9 Transforming Grid Tiles */}
          {renderImages.map((image, index) => (
            <motion.div
              key={`grid-tile-${index}`}
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: `${radius}px`,
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
                cursor: 'pointer',
                ...getImageStyle(index)
              }}
              onClick={() => handleTileClick(index)}
              title={image.title || `Gallery Image ${index + 1}`}
            >
              <img
                src={image.image || image.src}
                alt={image.title || `Gallery Image ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div className="grid-tile-overlay">
                <span className="grid-tile-label">{image.title}</span>
              </div>
            </motion.div>
          ))}

          {/* Active Focal Expanding Image */}
          {focalImage && (
            <motion.div 
              style={focalOverlayStyle}
              onClick={() => handleTileClick(focalIndex)}
              title={focalImage.title || 'Selected Sigdi Photo'}
            >
              <img
                src={focalImage.image || focalImage.src}
                alt={focalImage.title || 'Selected Sigdi Photo'}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Active selection glowing frame before expansion */}
              {clampedProgress < 0.25 && (
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: `${radius}px`,
                    border: '2px solid rgba(255, 255, 255, 0.9)',
                    boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.25), 0 0 25px rgba(255, 255, 255, 0.25)',
                    pointerEvents: 'none'
                  }}
                />
              )}

              {/* Grid tile overlay label on hover before expansion */}
              {clampedProgress < 0.25 && (
                <div className="grid-tile-overlay" style={{ pointerEvents: 'none' }}>
                  <span className="grid-tile-label">{focalImage.title}</span>
                </div>
              )}

              {/* Fullscreen Overlay Caption when Expanded */}
              <motion.div 
                className="center-expanded-caption"
                style={{
                  opacity: Math.max(0, (clampedProgress - 0.7) / 0.3),
                  transform: `translateY(${Math.max(0, (1 - clampedProgress) * 30)}px)`
                }}
              >
                <span className="expanded-badge">SIGDI RESORT ALWAR</span>
                <h2>{focalImage.title || 'Grand Celebration Atmosphere'}</h2>
                <p>{focalImage.description || 'Experience royal hospitality and unforgettable moments.'}</p>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Ambient Progress Indicator at Bottom */}
        <div className="animated-gallery-bottom-progress">
          <div 
            className="gallery-progress-bar-fill" 
            style={{ width: `${Math.round(clampedProgress * 100)}%` }} 
          />
        </div>
      </section>
    </div>
  );
}
