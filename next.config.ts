
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
};

export default nextConfig;
