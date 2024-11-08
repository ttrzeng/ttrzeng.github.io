const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/ttrzeng.github.io/' : '',
  basePath: isProd ? '/ttrzeng.github.io' : '',
  output: 'export'
};

export default nextConfig;