// @vitest-environment node
import { createRequire } from "node:module"
import path from "node:path"
import { describe, expect, it, vi } from "vitest"
const require = createRequire(import.meta.url)
const { createPages, onCreateNode } = require("../gatsby-node.js")

const edge = (template, slug) => ({
  node: { fields: { slug }, frontmatter: { template, title: "Example" } },
})
describe("blog page generation", () => {
  it("creates a page for each post with its slug and template, excluding work and other content", async () => {
    const graphql = vi.fn().mockResolvedValue({
      data: {
        allMarkdownRemark: {
          edges: [
            edge("post", "/first/"),
            edge("work", "/job/"),
            edge("post", "/second/"),
            edge(undefined, "/other/"),
          ],
        },
      },
    })
    const createPage = vi.fn()
    await createPages({ graphql, actions: { createPage } })
    expect(createPage.mock.calls.map(([page]) => page)).toEqual(
      ["/first/", "/second/"].map(slug => ({
        path: slug,
        component: path.resolve("src/templates/post.js"),
        context: { slug },
      })),
    )
    expect(graphql.mock.calls[0][0]).toContain("date: DESC")
    expect(graphql.mock.calls[0][0]).toContain("title: ASC")
  })
  it("accepts an empty collection", async () => {
    const createPage = vi.fn()
    await createPages({
      graphql: async () => ({ data: { allMarkdownRemark: { edges: [] } } }),
      actions: { createPage },
    })
    expect(createPage).not.toHaveBeenCalled()
  })
  it("propagates GraphQL errors before creating pages", async () => {
    const errors = [new Error("Query failed")]
    const createPage = vi.fn()
    await expect(
      createPages({
        graphql: async () => ({ errors }),
        actions: { createPage },
      }),
    ).rejects.toBe(errors)
    expect(createPage).not.toHaveBeenCalled()
  })
})
describe("slug generation", () => {
  it("derives Markdown slugs from the parent file path", () => {
    const node = { internal: { type: "MarkdownRemark" }, parent: "file-id" }
    const getNode = vi.fn().mockReturnValue({
      internal: { type: "File" },
      relativePath: "blog/example/index.md",
    })
    const createNodeField = vi.fn()
    onCreateNode({ node, getNode, actions: { createNodeField } })
    expect(createNodeField).toHaveBeenCalledWith({
      name: "slug",
      node,
      value: "/blog/example/",
    })
  })
  it("does not add slug fields to non-Markdown nodes", () => {
    const createNodeField = vi.fn()
    const getNode = vi.fn()
    onCreateNode({
      node: { internal: { type: "File" } },
      getNode,
      actions: { createNodeField },
    })
    expect(createNodeField).not.toHaveBeenCalled()
    expect(getNode).not.toHaveBeenCalled()
  })
})
