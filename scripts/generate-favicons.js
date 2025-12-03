const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Read the SVG file
const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/logo.svg'));

// Ensure public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function generateFavicons() {
  try {
    // Generate favicon.ico (32x32)
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✓ Generated favicon.ico');

    // Generate favicon-16x16.png
    await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    console.log('✓ Generated favicon-16x16.png');

    // Generate favicon-32x32.png
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    console.log('✓ Generated favicon-32x32.png');

    // Generate apple-touch-icon.png (180x180)
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ Generated apple-touch-icon.png');

    // Generate android-chrome-192x192.png
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'android-chrome-192x192.png'));
    console.log('✓ Generated android-chrome-192x192.png');

    // Generate android-chrome-512x512.png
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'android-chrome-512x512.png'));
    console.log('✓ Generated android-chrome-512x512.png');

    // Generate OG image (1200x630)
    await sharp(svgBuffer)
      .resize(1200, 630, {
        fit: 'contain',
        background: { r: 26, g: 26, b: 26, alpha: 1 }
      })
      .png()
      .toFile(path.join(publicDir, 'og-image.jpg'));
    console.log('✓ Generated og-image.jpg');

    console.log('\n✅ All favicon files generated successfully!');
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();