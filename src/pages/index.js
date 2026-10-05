import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogTeaser } from "../components/blog-teaser"
import { graphql } from "gatsby"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      {posts.map(({ node }) => (
        <BlogTeaser key={node.fields.slug} node={node} />
      ))}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: [{frontmatter: {date: DESC}}, {frontmatter: {title: ASC}}]
      filter: {frontmatter: {template: {eq: "post"}}}
    ) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            template
            title
            description
            slug
          }
        }
      }
    }
  }
`

export const Head = () => <SEO title="Home" />
