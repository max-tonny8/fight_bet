/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/game",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
