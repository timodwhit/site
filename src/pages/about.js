import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const workPosts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div>
        <h1>Tim Whitney</h1>
      </div>
      <div class="section">
        <div class="about">
        <h2 class="work--heading">About</h2>
          <p>Born and raised a child of two midwestern-ers, Tim isn't sure if he
          should discuss himself in first person or third. He is often conflicted
          by this and tends to opt for the first person except when writing an
          about statement. If you made it this far, congratulations 3 sentences
          is quite a feat of endurance in our modern world.</p>
          <p> Thank you for taking the time to visit my site. If you are looking
          for a passionate leader, web-evangelist or just another pun please reach
          out.</p>
        </div>
      </div>
      <div class="section">
        <h2 class="work--heading">Technologies</h2>
        <table class="technologies--table">
          <tbody>
            <tr>
              <td>React</td>
              <td>Typescript</td>
              <td>Node.js</td>
              <td>JS/CSS/HTML</td>
            </tr>
            <tr>
              <td>PHP</td>
              <td>Drupal 8</td>
              <td>Drupal 7</td>
              <td>Composer</td>
            </tr>
            <tr>
              <td>OpenShift/Kubernetes</td>
              <td>Docker</td>
              <td>Vagrant</td>
              <td>Ansible & Chef</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="section">
        <h2 class="work--heading">Work experience</h2>
        {workPosts.map(work => {
          const title = work.node.frontmatter.title || work.node.fields.slug
          const node = work.node

          return (
            <article class="work--article" key={node.fields.slug}>
              <header>
                <h3>
                  {title}
                </h3>
                 <h4>{node.frontmatter.role}</h4>
                <div class="work--dates">
                  {node.frontmatter.dates}
                </div>
                <div class="work--location">
                  Location: {node.frontmatter.location}
                </div>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.html,
                  }}
                />
              </section>
            </article>
          )
        })}
      </div>
      <div class="section">
        <h2 class="work--heading">Education</h2>
        <article class="work--article">
          <header>
            <h3>North Central College</h3>
            <h4>Bachelors of Arts in Mathematics & Studio Art</h4>
            <div class="work--dates">September 2007 - December 2010</div>
            <div class="work--location">Location: Naperville, IL</div>
          </header>
          <section>
            <p>
              Graduated Cum Laude with Honors<br />
              Minor: History of Ideas
            </p>
          </section>
        </article>
      </div>
      <div class="section">
        <h2 class="work--heading">Hobbies & Interests</h2>
        <table class="technologies--table">
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
      sort: { order: DESC, fields: [frontmatter___order]}
      filter: { frontmatter: { template: { eq: "work" } } }
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
