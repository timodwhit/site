import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderToStaticMarkup } from "react-dom/server"
import { BlogTeaser } from "../src/components/blog-teaser"
import { WorkItem } from "../src/components/WorkItem"
import Header from "../src/components/header"
import Layout from "../src/components/layout"
import SEO from "../src/components/seo"
import HomePage, { Head as HomeHead } from "../src/pages/index"
import BlogPage, { Head as BlogHead } from "../src/pages/blog"
import AboutPage, { Head as AboutHead } from "../src/pages/about"
import NotFoundPage, { Head as NotFoundHead } from "../src/pages/404"
import BlogPost, { Head as PostHead } from "../src/templates/post"

const node = (overrides = {}) => ({
  fields: { slug: "/example/" },
  frontmatter: {
    title: "Example post",
    date: "January 01, 2024",
    description: "<strong>Description</strong>",
    category: "dev",
  },
  excerpt: "Fallback excerpt",
  html: "<p>Full post content</p>",
  ...overrides,
})
const pageData = nodes => ({
  site: { siteMetadata: { title: "Test Site" } },
  allMarkdownRemark: { edges: nodes.map(node => ({ node })) },
})

describe("blog teasers", () => {
  it("links the title to the post and renders the formatted date and HTML description", () => {
    render(<BlogTeaser node={node()} />)
    expect(screen.getByRole("link", { name: "Example post" })).toHaveAttribute(
      "href",
      "/example/",
    )
    expect(screen.getByText("January 01, 2024")).toBeInTheDocument()
    expect(screen.getByText("Description").tagName).toBe("STRONG")
    expect(screen.queryByText("Fallback excerpt")).not.toBeInTheDocument()
  })
  it("uses the slug and excerpt when frontmatter omits the title and description", () => {
    render(<BlogTeaser node={node({ frontmatter: { date: "Today" } })} />)
    expect(screen.getByRole("link", { name: "/example/" })).toHaveAttribute(
      "href",
      "/example/",
    )
    expect(screen.getByText("Fallback excerpt")).toBeInTheDocument()
  })
})
describe("work items", () => {
  it("renders work metadata and rich content", () => {
    render(
      <WorkItem
        work={{
          node: node({
            frontmatter: {
              title: "Company",
              role: "Engineer",
              dates: "2020–2024",
              location: "Denver",
            },
          }),
        }}
      />,
    )
    expect(screen.getByRole("heading", { name: "Company" })).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Engineer" }),
    ).toBeInTheDocument()
    expect(screen.getByText("2020–2024")).toBeInTheDocument()
    expect(screen.getByText("Location: Denver")).toBeInTheDocument()
    expect(screen.getByText("Full post content")).toBeInTheDocument()
  })
  it("uses the slug as the heading when the title is missing", () => {
    render(<WorkItem work={{ node: node({ frontmatter: {} }) }} />)
    expect(
      screen.getByRole("heading", { name: "/example/" }),
    ).toBeInTheDocument()
  })
})
it("provides home, blog, and about navigation", () => {
  render(<Header />)
  expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
    "href",
    "/blog",
  )
  expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
    "href",
    "/about",
  )
  expect(
    screen.getAllByRole("link").map(link => link.getAttribute("href")),
  ).toEqual(["/", "/blog", "/about"])
})
it("wraps page content in a main landmark with shared navigation", () => {
  render(
    <Layout>
      <p>Page body</p>
    </Layout>,
  )
  expect(
    within(screen.getByRole("main")).getByText("Page body"),
  ).toBeInTheDocument()
  expect(screen.getByRole("link", { name: "Blog" })).toBeInTheDocument()
})
const renderHead = element =>
  new DOMParser().parseFromString(renderToStaticMarkup(element), "text/html")
const expectMeta = (
  head: Document,
  attribute: string,
  name: string,
  content: string,
) => {
  expect(
    head.querySelector(`meta[${attribute}="${name}"]`)?.getAttribute("content"),
  ).toBe(content)
}
describe("SEO", () => {
  it("uses site defaults for description and language", () => {
    const head = renderHead(<SEO title="Home" />)
    expect(head.title).toBe("Home | Test Site")
    expect(head.documentElement.lang).toBe("en")
    expectMeta(head, "name", "description", "Default description")
    expectMeta(head, "property", "og:title", "Home")
    expectMeta(head, "name", "twitter:creator", "Test Author")
    expect(
      head.querySelector('link[rel="stylesheet"]')?.getAttribute("href"),
    ).toBe("//fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,300i,700")
  })
  it("honors custom descriptions, languages, and additional metadata", () => {
    const head = renderHead(
      <SEO
        title="Post"
        description="Custom summary"
        lang="fr"
        meta={[
          { name: "robots", content: "noindex" },
          { property: "og:locale", content: "fr_FR" },
          { id: "locale", name: "locale", content: "fr_FR" },
        ]}
      />,
    )
    expect(head.documentElement.lang).toBe("fr")
    expectMeta(head, "name", "description", "Custom summary")
    expectMeta(head, "property", "og:description", "Custom summary")
    expectMeta(head, "name", "twitter:description", "Custom summary")
    expectMeta(head, "name", "robots", "noindex")
    expectMeta(head, "property", "og:locale", "fr_FR")
  })
  it.each([
    [HomeHead, "Home"],
    [BlogHead, "Blog"],
    [AboutHead, "About"],
    [NotFoundHead, "404: Not found"],
  ])("exports page metadata for %s", (Head, title) => {
    expect(renderHead(<Head />).title).toBe(`${title} | Test Site`)
  })
})
describe("pages", () => {
  it("renders home posts in query order", () => {
    render(
      <HomePage
        data={pageData([
          node(),
          node({
            fields: { slug: "/second/" },
            frontmatter: { title: "Second" },
          }),
        ])}
      />,
    )
    expect(
      within(screen.getByRole("main"))
        .getAllByRole("link")
        .map(link => link.textContent),
    ).toEqual(["Example post", "Second"])
  })
  it("separates dev and personal posts without rendering other categories", () => {
    render(
      <BlogPage
        data={pageData([
          node(),
          node({
            fields: { slug: "/personal/" },
            frontmatter: { title: "Personal entry", category: "personal" },
          }),
          node({
            fields: { slug: "/other/" },
            frontmatter: { title: "Other entry", category: "other" },
          }),
        ])}
      />,
    )
    expect(
      within(screen.getByRole("main"))
        .getAllByRole("heading")
        .map(h => h.textContent?.trim()),
    ).toEqual([
      "Blog Posts",
      "Dev Blog",
      "Example post",
      "Personal Blog",
      "Personal entry",
    ])
    expect(screen.queryByText("Other entry")).not.toBeInTheDocument()
  })
  it("renders empty blog categories without crashing", () => {
    render(<BlogPage data={pageData([])} />)
    expect(
      screen.getByRole("heading", { name: "Dev Blog" }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Personal Blog" }),
    ).toBeInTheDocument()
    expect(screen.queryByRole("article")).not.toBeInTheDocument()
  })
  it("renders experience on the about page alongside static sections", () => {
    render(
      <AboutPage
        data={pageData([
          node({ frontmatter: { title: "Employer", role: "Developer" } }),
        ])}
      />,
    )
    for (const name of [
      "Tim Whitney",
      "Skills",
      "Experience",
      "Education",
      "Employer",
    ]) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument()
    }
  })
  it("renders a useful not-found page with navigation", () => {
    render(<NotFoundPage />)
    expect(
      screen.getByRole("heading", { name: "NOT FOUND" }),
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Blog" })).toBeInTheDocument()
  })
  it.each(["Summary override", ""])(
    "renders full post HTML and selects the SEO description (%s)",
    description => {
      const post = node()
      post.frontmatter.description = description
      render(
        <BlogPost
          data={{
            site: { siteMetadata: { title: "Test Site" } },
            markdownRemark: post,
          }}
        />,
      )
      expect(
        screen.getByRole("heading", { level: 1, name: "Example post" }),
      ).toBeInTheDocument()
      expect(screen.getByText("Full post content")).toBeInTheDocument()
      const head = renderHead(<PostHead data={{ markdownRemark: post }} />)
      expect(head.title).toBe("Example post | Test Site")
      expectMeta(head, "name", "description", description || "Fallback excerpt")
    },
  )
})
