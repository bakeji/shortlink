/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://urlbae.com/api/:path*'
          }
        ]
      }
    };

 
export default nextConfig;
