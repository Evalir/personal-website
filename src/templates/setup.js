import React from 'react'
import { graphql } from 'gatsby'
import 'styled-components/macro'

export default function SetupTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div>
      <h1
        css={`
          font-size: 4.8rem;
          margin-bottom: 3rem;
          font-weight: 800;
        `}
      >
        {frontmatter.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
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
