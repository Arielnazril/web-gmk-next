import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Mengizinkan produksi build tetap selesai meskipun ada error TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;