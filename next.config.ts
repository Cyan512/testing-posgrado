import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/ds0tjwccs/**', // Esto asegura que solo cargue imágenes de TU cuenta de Cloudinary
      },
    ],
  },
}

export default nextConfig
