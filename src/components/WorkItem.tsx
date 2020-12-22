import React from "react"

export const WorkItem = ({ work }) => {
  const node = work.node
  const title = node.frontmatter.title || node.fields.slug

  return (
    <article className="work--article">
      <header>
        <h3>{title}</h3>
        <h4>{node.frontmatter.role}</h4>
        <div className="work--dates">{node.frontmatter.dates}</div>
        <div className="work--location">
          Location: {node.frontmatter.location}
        </div>
      </header>
      <section
        dangerouslySetInnerHTML={{
          __html: node.html,
        }}
      />
    </article>
  )
}
