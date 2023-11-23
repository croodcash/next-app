/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {

      webpack: (config, options) => {
        config.module.rules.push({
          test: /\.pdf$/,
          use: [
            {
              loader: 'file-loader',
            } 
          ]
        },
        {
            test: /\.pptx$/,
            use: [
              {
                loader: 'file-loader',
              } 
            ]
          },
          {
            test: /\.xlsx$/,
            use: [
              {
                loader: 'file-loader',
              } 
            ]
          },
        {
            test: /\.node/,
            use: 'raw-loader',
          })
        return config
      },
    async headers() {
        return [
        {
          source: "/(.*)",
          headers: [
         { key: "Access-Control-Allow-Credentials", value: "true" },
         { key: "Access-Control-Allow-Origin", value: "*" },
         { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
        ]
        }
        ]
    },
    async rewrites() {
        return [
        //   {
        //     source: '/api/:path*',
        //     destination: 'https://www.w3.org/:path*',
        //   },
          {
            source: '/api/:path*',
            destination: 'https://www.lehman.edu/:path*',
          },
          {
            source: '/api/:path*',
            destination: 'https://wiki.documentfoundation.org/:path*',
          }
          
        ]
      },
  };
