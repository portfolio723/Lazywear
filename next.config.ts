
import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/Lazywear' : '',
  assetPrefix: isProd ? '/Lazywear/' : '',
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
  trailingSlash: true,
  allowedDevOrigins: [
      "https://*.cloudworkstations.dev",
      "https://*.firebase.studio"
  ]
};

export default nextConfig;
