/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : [
            {
                protocol: 'https',
                hostname: 'i.gyazo.com',
                port: "",

            },
        ]
    },
    
};

export default nextConfig;
