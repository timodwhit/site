import React from "react"
import { Link } from "gatsby"

export const BlogTeaser = node => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article key={node.fields.slug}>
      <header>
        <h3>
          <Link to={node.fields.slug}>{title}</Link>
        </h3>
        <div className="blog--date">{node.frontmatter.date}</div>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </article>
  )
}
