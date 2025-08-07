import { useState, useEffect, useRef } from 'react';
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
  const imageRef = useRef();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef.current && imageSrc === placeholder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setIsInView(true);
                setImageSrc(src);
                observer.unobserve(imageRef.current);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '50px',
          }
        );
        observer.observe(imageRef.current);
      } else {
        // Fallback for browsers without IntersectionObserver
        setIsInView(true);
        setImageSrc(src);
      }
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src, imageSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`${styles.lazyImageContainer} ${className}`}>
      <img
        ref={imageRef}
        src={imageSrc}
        alt={alt}
        className={`${styles.lazyImage} ${isLoaded ? styles.loaded : ''}`}
        onLoad={handleLoad}
        loading="lazy"
        sizes={sizes}
        {...props}
      />
      {!isLoaded && isInView && (
        <div className={styles.placeholder}>
          <div className={styles.spinner}></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
