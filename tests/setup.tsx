import { afterEach, vi } from "vitest"
import { cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"

vi.mock("gatsby", () => ({
  graphql: vi.fn(),
  Link: ({ to, children, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
  useStaticQuery: () => ({
    site: {
      siteMetadata: {
        title: "Test Site",
        description: "Default description",
        author: { name: "Test Author" },
      },
    },
  }),
}))
afterEach(cleanup)
