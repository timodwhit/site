// @vitest-environment node
import { createRequire } from "node:module"
import { expect, it } from "vitest"
const require = createRequire(import.meta.url)
const config = require("../gatsby-config.js")
const feed = config.plugins.find(
  plugin => plugin.resolve === "gatsby-plugin-feed",
).options.feeds[0]
it("serializes RSS entries with canonical links, excerpts, dates, and full HTML without mutating frontmatter", () => {
  const frontmatter = { title: "Example post", date: "2024-01-01" }
  const result = feed.serialize({
    query: {
      site: { siteMetadata: { siteUrl: "https://example.test" } },
      allMarkdownRemark: {
        edges: [
          {
            node: {
              frontmatter,
              fields: { slug: "/blog/example/" },
              excerpt: "Summary",
              html: "<p>Full article</p>",
            },
          },
        ],
      },
    },
  })
  expect(result).toEqual([
    {
      title: "Example post",
      date: "2024-01-01",
      description: "Summary",
      url: "https://example.test/blog/example/",
      guid: "https://example.test/blog/example/",
      custom_elements: [{ "content:encoded": "<p>Full article</p>" }],
    },
  ])
  expect(frontmatter).toEqual({ title: "Example post", date: "2024-01-01" })
  expect(feed.query).toContain('template: {eq: "post"}')
  expect(feed.output).toBe("/rss.xml")
  expect(feed.query).toContain("title: ASC")
})
it("serializes an empty RSS feed", () => {
  expect(
    feed.serialize({
      query: {
        site: { siteMetadata: { siteUrl: "https://example.test" } },
        allMarkdownRemark: { edges: [] },
      },
    }),
  ).toEqual([])
})
