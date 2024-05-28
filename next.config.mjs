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
  images: {
    domains: [
      "lezetomedia.s3.us-east-2.amazonaws.com",
      "mmajunkie.usatoday.com",
    ],
  },
};

export default nextConfig;
