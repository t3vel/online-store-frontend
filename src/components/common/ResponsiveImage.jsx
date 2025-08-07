import LazyImage from './LazyImage';

const ResponsiveImage = ({ 
  src, 
  alt, 
  className, 
  sizes = '100vw',
  webpSrc,
  ...props 
}) => {
  // Generate responsive sources if webpSrc is provided
  const generateSources = () => {
    if (!webpSrc) return null;

    const baseName = webpSrc.replace('.webp', '');
    return (
      <>
        <source
          srcSet={`${baseName}-320.webp 320w,
                   ${baseName}-768.webp 768w,
                   ${baseName}-1200.webp 1200w,
                   ${webpSrc} 1920w`}
          sizes={sizes}
          type="image/webp"
        />
        <source
          srcSet={`${src} 1920w`}
          sizes={sizes}
          type="image/jpeg"
        />
      </>
    );
  };

  return (
    <picture className={className}>
      {generateSources()}
      <LazyImage
        src={src}
        alt={alt}
        sizes={sizes}
        {...props}
      />
    </picture>
  );
};

export default ResponsiveImage;
