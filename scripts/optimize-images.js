import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../src/assets/images');
const outputDir = path.join(__dirname, '../src/assets/images/optimized');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const largeImages = [
  'start_with_background.jpg',
  '71a4ca034f23b11dc0eb83092b7a620b05768418.jpg',
  'olive_oil.jpg',
  'banner_background.jpg',
  'ceasar_salad.jpg',
  'cabbage.png',
  'carrot.png',
  'cauliflower.png',
  'tomatoes.png',
  'tomatoes_2.png',
  'tomatoes_3.png',
  'tomatoes_4.png',
  'tomatoes_5.png',
  'pepper.png',
  'vegetables_mix.png'
];

const compressImage = async (inputPath, outputPath, quality = 80) => {
  try {
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(compressedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
  }
};

const generateResponsiveSizes = async (inputPath, baseName) => {
  const sizes = [
    { width: 320, suffix: '320' },
    { width: 768, suffix: '768' },
    { width: 1200, suffix: '1200' }
  ];

  for (const size of sizes) {
    const outputPath = path.join(outputDir, `${baseName}-${size.suffix}.webp`);
    try {
      await sharp(inputPath)
        .resize(size.width, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
    } catch (error) {
      console.error(`❌ Error generating ${size.suffix} size for ${baseName}:`, error.message);
    }
  }
};

const main = async () => {
  console.log('🚀 Starting image optimization...\n');

  for (const image of largeImages) {
    const inputPath = path.join(inputDir, image);
    
    if (fs.existsSync(inputPath)) {
      const baseName = path.basename(image, path.extname(image));
      const outputPath = path.join(outputDir, `${baseName}.webp`);
      
      // Compress to WebP
      await compressImage(inputPath, outputPath);
      
      // Generate responsive sizes
      await generateResponsiveSizes(inputPath, baseName);
    } else {
      console.log(`⚠️  File not found: ${image}`);
    }
  }

  console.log('\n🎉 Image optimization complete!');
  console.log(`📁 Optimized images saved to: ${outputDir}`);
};

main().catch(console.error);
