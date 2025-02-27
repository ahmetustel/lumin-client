/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'], // Görsel domainini ekleyelim
    unoptimized: true, // Görsel optimizasyonunu devre dışı bırak
  },
  // Pages Router'ı kullan
  // output: 'export',
  // distDir: 'dist',
};

module.exports = nextConfig; 