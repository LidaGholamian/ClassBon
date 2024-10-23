/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.classbon.com',
            }
        ]
    }
};

export default nextConfig;
