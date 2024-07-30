import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { BlogTeaser } from "../components/blog-teaser";
import { graphql } from "gatsby";

const BlogIndex = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;
	const posts = data.allMarkdownRemark.edges;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="Home" />
			{posts.map(({ node }) => (
				<BlogTeaser key={node.fields.slug} node={node} />
			))}
		</Layout>
	);
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
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
`;
