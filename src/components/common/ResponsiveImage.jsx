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

    return (
      <>
        <source
          srcSet={webpSrc}
          sizes={sizes}
          type="image/webp"
        />
        <source
          srcSet={src}
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
