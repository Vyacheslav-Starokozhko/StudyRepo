/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        // You can add options here
                    },
                }
            ],
        });

        return config;
    },
};

export default nextConfig;
