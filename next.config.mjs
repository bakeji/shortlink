/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://urlbae.com/api/:path*'
          }
        ]
      },

      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'urlbae.com',
            port: '',
            pathname: '/qr/**',
          },
        ],
      },
    };

 
export default nextConfig;
