/** @type {import('next').NextConfig} */

const nextConfig = {
    distDir: 'prod_build', // custom name for PROD build folder   :)
    compress:false, // TEST et ...
    trailingSlash: true,
    //output: 'export',
    images: {
        unoptimized: true
    }
}



// Bundle analyze için..
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: 'true',
//   })
// module.exports = withBundleAnalyzer(nextConfig)


//export default nextConfig;


