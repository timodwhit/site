import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { BlogTeaser } from "../components/blog-teaser";
import { graphql } from "gatsby";

const BlogPageIndex = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;
	const personalPosts = data.allMarkdownRemark.edges.filter(
		(edge) => edge.node.frontmatter.category === "personal",
	);
	const devPosts = data.allMarkdownRemark.edges.filter(
		(edge) => edge.node.frontmatter.category === "dev",
	);

	return (
		<Layout>
			<SEO title="Blog" />
			<h1> Blog Posts </h1>
			<h2>Dev Blog</h2>
			{devPosts.map(({ node }) => (
				<BlogTeaser key={node.fields.slug} node={node} />
			))}
			<h2>Personal Blog</h2>
			{personalPosts.map(({ node }) => (
				<BlogTeaser key={node.fields.slug} node={node} />
			))}
		</Layout>
	);
};

export default BlogPageIndex;

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
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            template
            title
            description
            slug
            category
          }
        }
      }
    }
  }
`;
