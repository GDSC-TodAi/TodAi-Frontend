import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 워크스페이스 공유 패키지(@todai/api)는 TS 소스 그대로 배포되므로 트랜스파일 대상에 포함한다.
  transpilePackages: ["@todai/api"],
  async rewrites() {
    return [
      {
        source: "/proxy/:path*",
        destination: `${process.env.API_BASE_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
