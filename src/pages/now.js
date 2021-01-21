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
          future. I last updated this on 20th January, 2021.
        </p>
        <h2>Work</h2>
        <ul>
          <li>Back after a long break, extended by leaving Aragon One.</li>
          <li>
            Currently getting set up and up to speed with the team at my new
            job,{' '}
            <SafeLink location="https://pokt.network/">Pocket Network</SafeLink>
            . Excited!
          </li>
        </ul>
        <h2>Music</h2>
        <ul>
          <li>
            Currently going through Ableton's{' '}
            <SafeLink location="https://learningsynths.ableton.com/en/">
              synthesis tutorials.
            </SafeLink>
          </li>
          <li>(Still) Playing more bass. Mainly learning Vulfpeck riffs.</li>
        </ul>
        <h2>Life</h2>
        <ul>
          <li>
            Currently solidifying my workout habit. I think I've got it down,
            and will soon have more bandwith to introduce something else into
            the routine. Supplementing those efforts with reading{' '}
            <span
              css={`
                font-style: italic;
              `}
            >
              The Power Of Habit
            </span>{' '}
            by Charles Duhigg.
          </li>
          <li>
            Still living in the Dominican Republic. Warm (hot) and sunny.
            Looking for borders to open (for real) so I can have a long long
            trip somewhere.
          </li>
        </ul>
      </main>
    </>
  )
}
