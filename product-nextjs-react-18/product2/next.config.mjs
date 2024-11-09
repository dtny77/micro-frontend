import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config,options ){
    config.plugins.push(
      new NextFederationPlugin({
        name: 'product',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './ProductApp': './micro-frontend/_mount.js'
        },
        shared: {},
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    )
    return config
  }
};

export default nextConfig;