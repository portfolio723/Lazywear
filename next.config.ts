
import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? '/Lazywear' : '',
  assetPrefix: isProd ? '/Lazywear/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
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
  devServer: {
    allowedDevOrigins: ["https://*.cloudworkstations.dev"],
  }
};

export default nextConfig;
