import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './LazyImage.module.css';

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  placeholder = '/placeholder.jpg',
  sizes = '100vw',
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imageRef = useRef();
  const observerRef = useRef();

  const handleIntersection = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        setIsInView(true);
        setImageSrc(src);
        
        // Safely unobserve the element
        if (observerRef.current && imageRef.current) {
          observerRef.current.unobserve(imageRef.current);
        }
      }
    });
  }, [src]);

  useEffect(() => {
    // Skip if already loaded or if element doesn't exist
    if (imageSrc !== placeholder || !imageRef.current) {
      return;
    }

    if (IntersectionObserver) {
      try {
        const observer = new IntersectionObserver(handleIntersection, {
          threshold: 0.01,
          rootMargin: '50px',
        });
        
        observerRef.current = observer;
        observer.observe(imageRef.current);
      } catch {
        // Fallback for browsers without IntersectionObserver
        setIsInView(true);
        setImageSrc(src);
      }
    } else {
      // Fallback for browsers without IntersectionObserver
      setIsInView(true);
      setImageSrc(src);
    }

    return () => {
      // Safely cleanup the observer
      if (observerRef.current && imageRef.current) {
        try {
          observerRef.current.unobserve(imageRef.current);
        } catch {
          // Ignore cleanup errors
        }
      }
    };
  }, [src, imageSrc, placeholder, handleIntersection]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(false);
    // Fallback to original src if WebP fails
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  }, [imageSrc, src]);

  return (
    <div className={`${styles.lazyImageContainer} ${className}`}>
      <img
        ref={imageRef}
        src={imageSrc}
        alt={alt}
        className={`${styles.lazyImage} ${isLoaded ? styles.loaded : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        sizes={sizes}
        {...props}
      />
      {!isLoaded && isInView && !hasError && (
        <div className={styles.placeholder}>
          <div className={styles.spinner}></div>
        </div>
      )}
      {hasError && (
        <div className={styles.errorPlaceholder}>
          <span>⚠️ Image failed to load</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
