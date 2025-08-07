import React from 'react';
import LazyImage from './LazyImage';
import ResponsiveImage from './ResponsiveImage';
import bannerBackground from '@assets/images/banner_background.jpg';
import bannerBackgroundWebp from '@assets/images/optimized/banner_background.webp';

const ImageTest = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Image Loading Test</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Original Image (LazyImage)</h3>
        <LazyImage
          src={bannerBackground}
          alt="Banner background original"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Optimized Image (ResponsiveImage)</h3>
        <ResponsiveImage
          src={bannerBackground}
          webpSrc={bannerBackgroundWebp}
          alt="Banner background optimized"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Direct Image (for comparison)</h3>
        <img
          src={bannerBackground}
          alt="Banner background direct"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
      </div>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <h4>Debug Info:</h4>
        <p><strong>Original Image Path:</strong> {bannerBackground}</p>
        <p><strong>WebP Image Path:</strong> {bannerBackgroundWebp}</p>
        <p><strong>WebP Support:</strong> {typeof window !== 'undefined' && window.createImageBitmap ? 'Supported' : 'Not supported'}</p>
      </div>
    </div>
  );
};

export default ImageTest;
