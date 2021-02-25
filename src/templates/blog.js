import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import 'styled-components/macro'

export default function BlogTemplate({ data, pageContext }) {
  const {
    allMarkdownRemark: { nodes },
  } = data
  const { currentPage = 1, numOfPages } = pageContext

  const hasPagesBehind = currentPage < numOfPages
  const hasPagesInFront = currentPage > 1

  return (
    <>
      {nodes.map(({ excerpt, frontmatter, timeToRead }) => {
        const { date, slug, title } = frontmatter

        return (
          <React.Fragment key={slug}>
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
                  excerpt={excerpt}
                  slug={slug}
                  timeToRead={timeToRead}
                  title={title}
                />
              ) : (
                <JournalEntry date={date} slug={slug} />
              )}
            </div>
          </React.Fragment>
        )
      })}
      <div
        css={`
          width: 100%;
          margin-top: 4rem;
          display: flex;
          justify-content: space-between;
        `}
      >
        {hasPagesBehind ? (
          <PaginationButton
            forward={false}
            to={`/blog/${currentPage + 1}`}
          />
        ) : (
          <div
            css={`
              flex-grow: 1;
            `}
          />
        )}
        {hasPagesInFront && (
          <PaginationButton
            to={`/blog/${
              currentPage - 1 === 1 ? '' : currentPage - 1
            }`}
          />
        )}
      </div>
    </>
  )
}

function PaginationButton({ forward = true, to }) {
  return (
    <>
      <Link
        to={to}
        css={`
          font-size: 3rem;
        `}
      >
        {forward ? 'Newer →' : '← Older'}
      </Link>
    </>
  )
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
  query blogQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
