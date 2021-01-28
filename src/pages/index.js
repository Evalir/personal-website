import * as React from 'react'
import { Link } from 'gatsby'
import 'styled-components/macro'
import SafeLink from '../components/safeLink/safeLink'

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
          I currently work as a Full-Stack Software Engineer at&nbsp;
          <SafeLink href="https://pokt.network">Pocket Network</SafeLink>, in
          which I maintain, help set technical direction and develop our
          user-facing products as part of the Ecosystem Development Team. Before
          that I was working at{' '}
          <SafeLink href="https://aragon.one">Aragon One</SafeLink>, where I
          maintained various Javascript libraries and applications, and
          spearheaded product initiatives. I also like to experiment out in the
          open with Open Source whenever I have time. If you want to get in
          touch, just&nbsp;
          <a href="mailto: hi@enriqueortiz.dev">shoot me an email</a>.
        </p>
      </main>
    </>
  )
}
