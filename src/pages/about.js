import * as React from 'react'
import 'styled-components/macro'
import SafeLink from '../components/safeLink/safeLink'

export default function About() {
  return (
    <>
      {' '}
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
          Who am I?
        </h1>
        <p>Hello,</p>
        <p>
          I'm Enrique Ortiz. Nice to meet you! I'm a{' '}
          <SafeLink href="https://github.com/evalir">
            Software Developer
          </SafeLink>
          , Musician, and life tinkerer living in the Dominican Republic.
        </p>
        <p>
          I enjoy experimenting with and learning new things constantly—those
          are the things I'd say I do somewhat well, at least. These involve
          mainly web technologies. On my day job at Pocket Network, I apply this
          knowledge and maintain user-facing products such as the Dashboard,
          Wallet and Block Explorer. Call that full-stack, if you will.
        </p>

        <p>
          When not at my day job, I like listening, collecting and making music.
          I play guitar and bass, and I'm a huge fan of artists like Enya, Tycho
          and Judas Priest. My "artist" name is{' '}
          <SafeLink href="https://evalir.bandcamp.com/">Evalir</SafeLink>, which
          has also become my username on the internet for, well, pretty much
          everything?
        </p>

        <p>
          I also really like being outdoors, doing extreme sports, reading, and
          doing whatever random and interesting thing comes up at the time. It's
          all about having fun, and learning throughout the way.
        </p>
      </main>
    </>
  )
}
