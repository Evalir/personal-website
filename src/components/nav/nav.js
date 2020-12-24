import * as React from 'react'
import { Link } from 'gatsby'
import 'styled-components/macro'
import { breakpoint } from '../../lib/breakpoints'

export default function Nav() {
  return (
    <nav
      css={`
        display: flex;
        flex-direction: column;
        ${breakpoint('small', `flex-direction: row;`)}
        margin-bottom: 4.2rem;

        a:not(:first-child) {
          margin-left: 1.6rem;
        }
      `}
    >
      <Link
        to="/"
        css={`
          font-weight: 600;
          text-decoration: underline;
          background: none;
          flex-grow: 1;
        `}
      >
        Enrique Ortiz
      </Link>
      <div
        css={`
          margin-top: 2rem;
          ${breakpoint('small', `margin-top: 0rem;`)}
        `}
      >
        <Link to="/blog">Blog</Link>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/more">More</Link>
      </div>
    </nav>
  )
}
