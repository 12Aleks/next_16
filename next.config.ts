import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    reactStrictMode: true,
    cacheComponents: true,
    cacheLife: {
        test: {
            stale: 5 * 60,
            revalidate: 1,
            expire: 5 * 60
        }
    }
};

export default nextConfig;
