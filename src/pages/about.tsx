import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { WorkItem } from "../components/WorkItem"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const workPosts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div>
        <h1>Tim Whitney</h1>
      </div>
      <div className="section">
        <div className="about">
          <h2 className="work--heading">About</h2>
          <p>
            Thank you for taking the time to visit my site. If you are looking
            for a passionate leader, web-evangelist or just another pun please
            reach out.
          </p>
        </div>
      </div>
      <div className="section">
        <h2 className="work--heading">Technologies</h2>
        <table className="technologies--table">
          <tbody>
            <tr>
              <td>Typescript</td>
              <td>PHP</td>
              <td>Python</td>
            </tr>
            <tr>
              <td>React</td>
              <td>Drupal</td>
              <td>Node.js</td>
            </tr>
            <tr>
              <td>AWS</td>
              <td>OpenShift/Kubernetes</td>
              <td>Docker</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="section">
        <h2 className="work--heading">Work experience</h2>
        {workPosts.map((work, index) => (
          <WorkItem work={work} key={index} />
        ))}
      </div>
      <div className="section">
        <h2 className="work--heading">Education</h2>
        <article className="work--article">
          <header>
            <h3>North Central College</h3>
            <h4>Bachelors of Arts in Mathematics & Studio Art</h4>
            <div className="work--dates">September 2007 - December 2010</div>
            <div className="work--location">Location: Naperville, IL</div>
          </header>
          <section>
            <p>
              Graduated Cum Laude with Honors
              <br />
              Minor: History of Ideas
            </p>
          </section>
        </article>
      </div>
      <div className="section">
        <h2 className="work--heading">Hobbies & Interests</h2>
        <table className="technologies--table">
          <tbody>
            <tr>
              <td>Camping</td>
              <td>Biking</td>
              <td>Running</td>
            </tr>
            <tr>
              <td>Wood-working</td>
              <td>Reading</td>
              <td>Scotch</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {frontmatter: {order: DESC}}
      filter: {frontmatter: {template: {eq: "work"}}}
    ) {
      edges {
        node {
          html
          frontmatter {
            template
            title
            description
            slug
            role
            location
            dates
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
