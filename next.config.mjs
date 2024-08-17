/** @type {import('next').NextConfig} */
const nextConfig = {
   

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
