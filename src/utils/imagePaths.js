// Utility for managing optimized image paths

const OPTIMIZED_IMAGES = {
  'banner_background.jpg': 'optimized/banner_background.webp',
  'start_with_background.jpg': 'optimized/start_with_background.webp',
  '71a4ca034f23b11dc0eb83092b7a620b05768418.jpg': 'optimized/71a4ca034f23b11dc0eb83092b7a620b05768418.webp',
  'olive_oil.jpg': 'optimized/olive_oil.webp',
  'ceasar_salad.jpg': 'optimized/ceasar_salad.webp',
  'cabbage.png': 'optimized/cabbage.webp',
  'carrot.png': 'optimized/carrot.webp',
  'cauliflower.png': 'optimized/cauliflower.webp',
  'tomatoes.png': 'optimized/tomatoes.webp',
  'tomatoes_2.png': 'optimized/tomatoes_2.webp',
  'tomatoes_3.png': 'optimized/tomatoes_3.webp',
  'tomatoes_4.png': 'optimized/tomatoes_4.webp',
  'tomatoes_5.png': 'optimized/tomatoes_5.webp',
  'pepper.png': 'optimized/pepper.webp',
  'vegetables_mix.png': 'optimized/vegetables_mix.webp'
};

export const getOptimizedImagePath = (originalPath) => {
  const fileName = originalPath.split('/').pop();
  const optimizedPath = OPTIMIZED_IMAGES[fileName];
  
  if (optimizedPath) {
    return `/src/assets/images/${optimizedPath}`;
  }
  
  return originalPath;
};

export const getResponsiveImagePaths = (originalPath) => {
  const fileName = originalPath.split('/').pop();
  const baseName = fileName.replace(/\.[^/.]+$/, '');
  
  if (OPTIMIZED_IMAGES[fileName]) {
    return {
      webp: `/src/assets/images/optimized/${baseName}.webp`,
      webp320: `/src/assets/images/optimized/${baseName}-320.webp`,
      webp768: `/src/assets/images/optimized/${baseName}-768.webp`,
      webp1200: `/src/assets/images/optimized/${baseName}-1200.webp`
    };
  }
  
  return {
    original: originalPath
  };
};

// Helper function to get image import path
export const getImageImportPath = (imageName) => {
  return `@assets/images/${imageName}`;
};

// Helper function to get optimized image import path
export const getOptimizedImageImportPath = (imageName) => {
  const baseName = imageName.replace(/\.[^/.]+$/, '');
  return `@assets/images/optimized/${baseName}.webp`;
};
