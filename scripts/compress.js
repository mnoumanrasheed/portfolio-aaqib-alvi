const sharp = require('sharp');
const fs = require('fs');

const files = ['about-hero', 'contact-hero', 'impact-hero', 'leadership-expertise-hero'];

async function compress() {
  for (const name of files) {
    const input = `public/${name}.png`;
    const webpOut = `public/${name}.webp`;
    const tempPng = `public/${name}-opt.png`;

    if (fs.existsSync(input)) {
      await sharp(input).resize(1920).webp({ quality: 80 }).toFile(webpOut);
      await sharp(input).resize(1920).png({ quality: 80, compressionLevel: 9 }).toFile(tempPng);
      fs.copyFileSync(tempPng, input);
      fs.unlinkSync(tempPng);
      console.log(`Compressed ${name}`);
    }
  }
}

compress().catch(console.error);
