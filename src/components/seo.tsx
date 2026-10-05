import { graphql, useStaticQuery } from "gatsby"
import type { ComponentProps } from "react"

type SEOProps = {
  title: string
  description?: string
  lang?: string
  meta?: ComponentProps<"meta">[]
}

const SEO = ({ description = "", lang = "en", meta = [], title }: SEOProps) => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadataForHead {
      site {
        siteMetadata {
          title
          description
          author {
            name
          }
        }
      }
    }
  `)
  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <html lang={lang} />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <link
        rel="stylesheet"
        href="//fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,300i,700"
      />
      <meta id="description" name="description" content={metaDescription} />
      <meta id="og:title" property="og:title" content={title} />
      <meta
        id="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta id="og:type" property="og:type" content="website" />
      <meta id="twitter:card" name="twitter:card" content="summary" />
      <meta
        id="twitter:creator"
        name="twitter:creator"
        content={site.siteMetadata.author.name}
      />
      <meta id="twitter:title" name="twitter:title" content={title} />
      <meta
        id="twitter:description"
        name="twitter:description"
        content={metaDescription}
      />
      {meta.map(tag => (
        <meta
          {...tag}
          id={tag.id || tag.name || tag.property}
          key={tag.id || tag.name || tag.property}
        />
      ))}
    </>
  )
}

export default SEO
