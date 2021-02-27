import * as React from 'react'
import 'styled-components/macro'
import SafeLink from '../components/safeLink/safeLink'

export default function Now() {
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
          Now
        </h1>
        <p>
          This is what I've been, am, and will be up to for the foreseeable
          future. I last updated this on 27th February, 2021.
        </p>
        <h2>Work</h2>
        <ul>
          <li>
            Currently getting up to speed with the team at my new job,{' '}
            <SafeLink location="https://pokt.network/">Pocket Network</SafeLink>
            . There are a few product improvements I'm trying to get out of the
            door, and tons of organizational things we're doing to shift to a
            more product-first culture.
          </li>
          <li>
            Looking for a designer to join the team, so that we can start
            building pocketUI, our in-house design system for our products,
            together.
          </li>
          <li>
            Getting everything for my upcoming dev-focused newsletter set up.
          </li>
        </ul>
        <h2>Personal</h2>
        <ul>
          <li>
            Focusing on improving my diet. I work out at least 4 times a week
            now, and I've already started to feel much better due to it.
          </li>
          <li>
            Still living in the Dominican Republic. It's getting too hot again.
            Looking for borders to open (for real) so I can have a long trip
            somewhere.
          </li>
        </ul>
      </main>
    </>
  )
}
