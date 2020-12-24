import * as React from 'react'
import 'styled-components/macro'
import SafeLink from '../components/SafeLink/SafeLink'

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
          future. I last updated this on 24th December, 2020.
        </p>
        <h2>Work</h2>
        <ul>
          <li>
            Currently taking the much-needed christmas break from an insane year
            at Aragon One.
          </li>
          <li>
            Building{' '}
            <SafeLink href="https://github.com/aragon/govern">Govern</SafeLink>,
            the next-gen framework for decentralized Governance and DAOs.
          </li>
        </ul>
        <h2>Music</h2>
        <ul>
          <li>
            Thinking of doing a side-project where I curate and release mixtapes
            once a week. Don't wanna commit to it just yet though, as I wanna
            avoid starting the new year with too much on my plate.
          </li>
          <li>Playing more bass. Mainly learning Vulfpeck riffs.</li>
        </ul>
        <h2>Life</h2>
        <ul>
          <li>
            Getting back to doing tons of exercise. I've always loved it, but
            lost discipline some time ago. It's time to get back on track!
          </li>
          <li>
            Still living in the Dominican Republic. Warm (hot) and sunny.
            Currently thinking about moving to some other country, for an
            adventure!
          </li>
        </ul>
      </main>
    </>
  )
}
