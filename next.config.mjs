/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "static.nike.com",
      },
    ],
  },
};

export default nextConfig;
