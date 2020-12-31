import React from 'react'
import { graphql } from 'gatsby'
import 'styled-components/macro'

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, timeToRead } = markdownRemark

  return (
    <div>
      <h1
        css={`
          text-align: center;
          font-size: 4.8rem;
          margin-bottom: 3rem;
        `}
      >
        {frontmatter.title}
      </h1>
      <h2
        css={`
          text-align: center;
          font-size: 1.6rem;
          color: var(--gray);
          margin-bottom: 6rem;
        `}
      >
        {frontmatter.date} - {timeToRead} minute read
      </h2>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        css={`
          font-family: 'Source Sans Pro';
        `}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
      timeToRead
    }
  }
`
