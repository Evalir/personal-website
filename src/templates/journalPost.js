import React from 'react'
import { graphql } from 'gatsby'
import 'styled-components/macro'
import { breakpoint } from '../lib/breakpoints'

export default function JournalTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <article
      css={`
        background: var(--cream);
        padding: 3.2rem 1.6rem 1.6rem;
        border-radius: 0.4rem;
      `}
    >
      <div
        css={`
          display: flex;
          flex-direction: column;
          ${breakpoint('small', `flex-direction: row;`)}
        `}
      >
        <h1
          css={`
            font-size: 1.6rem;
            margin-bottom: 1.2rem;
            ${breakpoint('small', `font-size: 2rem;`)}
            ${breakpoint('small', `margin-bottom: 3rem;`)}
            font-weight: 600;
          `}
        >
          {frontmatter.title} -&nbsp;
        </h1>
        <h2
          css={`
            font-size: 1.6rem;
            margin-bottom: 1.2rem;
            ${breakpoint('small', `font-size: 2rem;`)}
            ${breakpoint('small', `margin-bottom: 3rem;`)}
            color: var(--gray);
          `}
        >
          {frontmatter.date}
        </h2>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        css={`
          p {
            font-size: 1.6rem;
            line-height: 2.5rem;
            ${breakpoint('small', `font-size: 2rem; line-height: 4rem;`)}
          }
        `}
      />
    </article>
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
    }
  }
`
