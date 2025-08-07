// Utility functions for image optimization

export const getOptimizedImageUrl = (imagePath, options = {}) => {
  const { width, height, quality = 80, format = 'webp' } = options;
  
  // For now, return the original path
  // In production, you could integrate with a CDN like Cloudinary
  return imagePath;
};

export const getResponsiveImageSrcSet = (basePath, sizes = [320, 768, 1200]) => {
  return sizes.map(size => `${basePath}-${size}.webp ${size}w`).join(', ');
};

export const getImageSizes = (breakpoints = {
  mobile: '100vw',
  tablet: '50vw',
  desktop: '33vw'
}) => {
  return `(max-width: 768px) ${breakpoints.mobile}, 
          (max-width: 1024px) ${breakpoints.tablet}, 
          ${breakpoints.desktop}`;
};

export const preloadImage = (src) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

export const trackImageLoad = (imageElement) => {
  const startTime = performance.now();
  
  imageElement.addEventListener('load', () => {
    const loadTime = performance.now() - startTime;
    console.log(`Image loaded in ${loadTime.toFixed(2)}ms`);
    
    // Send to analytics if available
    if (window.gtag) {
      window.gtag('event', 'image_load_time', {
        value: Math.round(loadTime),
        custom_parameter: imageElement.src
      });
    }
  });
};
