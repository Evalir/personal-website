import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import 'styled-components/macro'

export default function BlogTemplate({ data }) {
  let {
    allMarkdownRemark: { nodes },
  } = data

  return nodes.map(({ excerpt, frontmatter, timeToRead }) => {
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
          {slug.includes('/blog/') ? (
            <BlogPost
              date={date}
              title={title}
              slug={slug}
              excerpt={excerpt}
              timeToRead={timeToRead}
            />
          ) : (
            <JournalEntry date={date} slug={slug} />
          )}
        </div>
      </>
    )
  })
}

function BlogPost({ date, excerpt, slug, timeToRead, title }) {
  return (
    <>
      <h3
        css={`
          margin-bottom: 1.6rem;
          font-size: 1.6rem;
        `}
      >
        {date.toUpperCase()} - {`${timeToRead} minute read`}
      </h3>
      <h2>
        <Link to={slug}>{title}</Link>
      </h2>
      <p
        css={`
          font-size: 1.6rem;
          font-family: 'Source Sans Pro';
          line-height: 2.4rem;
          color: black;
        `}
      >
        {excerpt}
      </p>
    </>
  )
}

function JournalEntry({ date, slug }) {
  return (
    <h2
      css={`
        font-size: 1.8rem;
      `}
    >
      <Link
        to={slug}
        css={`
          background: none;
          text-decoration: underline;
        `}
      >
        {date}
      </Link>
      &nbsp;journal entry
    </h2>
  )
}

const Divider = styled.div`
  width: 100%;
  height: 0px;
  border: 0.01px solid #f1f1f1;
`

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        ...MarkdownRemarkFragment
      }
    }
  }

  fragment MarkdownRemarkFragment on MarkdownRemark {
    frontmatter {
      date(formatString: "DD MMMM, YYYY")
      slug
      title
    }
    excerpt
    timeToRead
  }
`
