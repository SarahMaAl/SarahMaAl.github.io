import { defineConfig } from "astro/config";

const USERNAME = "SarahMaAl";
const REPOSITORY = "portfolio";

export default defineConfig({
  site: `https://${USERNAME}.github.io`,
  base: REPOSITORY ? `/${REPOSITORY}` : "/",
  trailingSlash: "always"
});
