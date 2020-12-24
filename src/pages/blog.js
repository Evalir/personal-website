import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import 'styled-components/macro'

export default function BlogTemplate({ data }) {
  let {
    allMarkdownRemark: { nodes },
  } = data

  console.log(nodes)

  return nodes.map(({ excerpt, frontmatter }) => {
    const { date, slug, title } = frontmatter

    return (
      <>
        <Divider />
        <div
          css={`
            display: flex;
            flex-direction: column;
            margin: 2rem 0;
            color: var(--gray);
          `}
        >
          <h3
            css={`
              font-size: 1.6rem;
              margin-bottom: 1.6rem;
            `}
          >
            {date.toUpperCase()} - {slug.includes('blog') ? 'Blog' : 'Journal'}
          </h3>
          <h2>
            <Link to={slug}>{title}</Link>
          </h2>
          {/* TODO: Detect this with the first slash of the slug (/blog/my-blog-post) */}
          {slug.includes('blog') && (
            <p
              css={`
                font-size: 1.6rem;
                color: black;
                font-family: 'Source Sans Pro';
                line-height: 2.4rem;
              `}
            >
              {excerpt}
            </p>
          )}
        </div>
      </>
    )
  })
}

const Divider = styled.div`
  width: 100%;
  height: 0px;
  border: 0.01px solid #f1f1f1;
`

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          slug
          title
        }
        excerpt
      }
    }
  }
`
