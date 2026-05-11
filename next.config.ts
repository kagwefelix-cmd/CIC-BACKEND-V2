import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'chatterinnercircle.vercel.app',
          },
        ],
        destination: 'https://chattersinnercircle.vercel.app/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
