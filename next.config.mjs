/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: "",
    basePath: "",
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        'path': '/',
        'loader': 'custom',
        'loaderFile': './my-loader.js',
    }
};

export default nextConfig;
