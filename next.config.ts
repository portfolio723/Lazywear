
require('dotenv').config();
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
  allowedDevOrigins: [
      "https://*.cloudworkstations.dev",
      "https://*.firebase.studio"
  ],
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY': JSON.stringify(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY),
        })
      );
    }
    return config;
  },
};

export default nextConfig;
