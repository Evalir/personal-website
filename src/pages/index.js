import * as React from 'react'
import { Link } from 'gatsby'
import 'styled-components/macro'
import SafeLink from '../components/SafeLink/SafeLink'

export default function Index() {
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
          Hello,
        </h1>
        <p>
          My name is Enrique Ortiz. I’m a software developer from the Dominican
          Republic, an island in the middle of the Caribbean Sea. You can{' '}
          <Link to="/about">get to know me</Link> better if you'd like. I also
          have a <Link to="/blog">blog</Link>, which I (try to) update
          regularly, with varying degrees of success.
        </p>
        <p>
          I currently work as a Software Engineer at&nbsp;
          <SafeLink href="https://aragon.one">Aragon One</SafeLink>, in which I
          usually do frontend development and run experiments to inform product
          initiatives. Before that I was working at Digital Human, a digital
          transformation company. I also like to experiment out in the open with
          Open Source whenever I have time. If you want to get in touch,
          just&nbsp;
          <a href="mailto: hi@enriqueortiz.dev">shoot me an email</a>.
        </p>
      </main>
    </>
  )
}
