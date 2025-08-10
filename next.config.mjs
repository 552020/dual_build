// import { withJuno } from "@junobuild/nextjs-plugin";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Required to emit out/ with static HTML files per route
//   output: "export",
// };

// export default withJuno(nextConfig);

// const isJuno = process.env.BUILD_TARGET === "juno";

// /** @type {import('next').NextConfig} */
// let nextConfig = {
//   reactStrictMode: true, // Default for Vercel
// };

// if (isJuno) {
//   const { withJuno } = await import("@junobuild/nextjs-plugin");
//   nextConfig = withJuno({
//     output: "export",
//     images: { unoptimized: true }, // safer for static export
//   });
// }

// export default nextConfig;

// next.config.mjs
// const isJuno = process.env.BUILD_TARGET === "juno";

// /** @type {import('next').NextConfig} */
// const base = {
//   reactStrictMode: true, // Vercel path
// };

// export default (async () => {
//   if (!isJuno) return base;

//   const { withJuno } = await import("@junobuild/nextjs-plugin");
//   return withJuno({
//     output: "export", // static export for Juno
//     images: { unoptimized: true }, // safe if you use next/image
//     trailingSlash: true, // friendlier for static hosting
//   });
// })();

const isJuno = process.env.BUILD_TARGET === "juno";

/** @type {import('next').NextConfig} */
const base = { reactStrictMode: true };

export default async function nextConfig() {
  if (!isJuno) return base;
  const { withJuno } = await import("@junobuild/nextjs-plugin");
  return withJuno({
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
  });
}
