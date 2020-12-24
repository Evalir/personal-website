import * as React from 'react'
import { Link } from 'gatsby'
import 'styled-components/macro'

export default function More() {
  return (
    <>
      <main
        css={`
          width: 100%;
          height: 100%;
        `}
      >
        <h1
          css={`
            font-weight: 600;
            margin-bottom: 1.6rem;
          `}
        >
          More
        </h1>
        <p>Ah, I love curious people like you.</p>
        <p>
          I encourage you to take a tour around this site. You may find some
          interesting things. :)
        </p>
        <p>Here are a couple of things you can take a look at:</p>
        <ul>
          <li>
            Find out what I'm doing&nbsp;
            <Link to="/now">
              <i>now</i>
            </Link>
            .
          </li>
          <li>
            Check out my current&nbsp;
            <Link to="/setup">
              <i>setup</i>
            </Link>
            .
          </li>
          <li>
            Check out what I&nbsp;<Link to="/inspiration">stole</Link>&nbsp;
            from other sites for this website.
          </li>
        </ul>
      </main>
    </>
  )
}
