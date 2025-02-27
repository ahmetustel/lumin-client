const fs = require('fs');
const path = require('path');
const https = require('https');

const IMAGES = {
  'logo.png': 'http://placehold.co/40',
  'dashboard.png': 'http://placehold.co/600x400'
};

const PUBLIC_DIR = path.join(__dirname, '../public/images');

// SSL sertifika doğrulamasını devre dışı bırakan seçenekler
const httpsOptions = {
  rejectUnauthorized: false
};

// Klasör yoksa oluştur
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Görselleri indir
Object.entries(IMAGES).forEach(([filename, url]) => {
  const filepath = path.join(PUBLIC_DIR, filename);
  
  if (!fs.existsSync(filepath)) {
    https.get(url, httpsOptions, (response) => {
      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        console.log(`Downloaded: ${filename}`);
      });

      fileStream.on('error', (error) => {
        console.error(`Error downloading ${filename}:`, error);
      });
    }).on('error', (error) => {
      console.error(`Error fetching ${filename}:`, error);
    });
  } else {
    console.log(`File already exists: ${filename}`);
  }
});

console.log('Image download process started...'); 