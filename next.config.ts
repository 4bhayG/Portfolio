import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photography until real project imagery is supplied.
    // Seeds are descriptive so each slot is identifiable when swapping in real assets.
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
};

export default nextConfig;
