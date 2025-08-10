import { defineConfig } from "@junobuild/config";

/** @type {import('@junobuild/config').JunoConfig} */
export default defineConfig({
  satellite: {
    ids: {
      //   development: '<DEV_SATELLITE_ID>',
      production: "fbdjl-uiaaa-aaaal-askaq-cai",
    },
    source: "out",
    predeploy: ["pnpm build:juno"],
  },
});
