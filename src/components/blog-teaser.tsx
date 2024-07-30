import React from "react";
import { Link } from "gatsby";
type Props = {
	node;
};

export const BlogTeaser = ({ node }: Props) => {
	const title = node.frontmatter.title || node.fields.slug;
	return (
		<article>
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
	);
};
