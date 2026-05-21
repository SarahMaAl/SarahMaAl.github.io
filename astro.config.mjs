import { defineConfig } from "astro/config";

const USERNAME = "SarahMaAl";
const REPOSITORY = "";

export default defineConfig({
  site: `https://${USERNAME}.github.io`,
  base: "/",
  trailingSlash: "always"
});
