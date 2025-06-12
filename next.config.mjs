/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}
 
export default nextConfig