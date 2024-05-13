/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : [
            {
                protocol: 'https',
                hostname: 'i.gyazo.com',
                port: "",

            },
            {
                protocol: 'https',
                hostname: 'storage.cloud.google.com',
            }
        ]
    }
};

export default nextConfig;
