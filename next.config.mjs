/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI:
      "mongodb+srv://admin:1214@cluster0.neo1pow.mongodb.net/mongo-db?retryWrites=true&w=majority&appName=Cluster0",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
