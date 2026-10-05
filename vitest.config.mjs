import { defineConfig } from "vitest/config"
import { transformSync } from "esbuild"

export default defineConfig({
  plugins: [
    {
      name: "gatsby-jsx",
      enforce: "pre",
      transform(code, id) {
        if (id.includes("/src/") && id.endsWith(".js")) {
          return transformSync(code, {
            loader: "jsx",
            jsx: "automatic",
            sourcemap: "inline",
          })
        }
      },
    },
  ],
  oxc: { jsx: { runtime: "automatic" } },
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.tsx"],
    include: ["tests/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      include: [
        "gatsby-node.js",
        "gatsby-config.js",
        "src/components/{blog-teaser,WorkItem,seo,header,layout}.tsx",
        "src/pages/*.{js,tsx}",
        "src/templates/post.js",
      ],
      thresholds: { statements: 90, branches: 90, functions: 90, lines: 90 },
    },
  },
})
