import * as React from 'react'
import { Link } from 'gatsby'
import 'styled-components/macro'
import SafeLink from '../components/safeLink/safeLink'

export default function About() {
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
          Who am I?
        </h1>
        <p>Hello,</p>
        <p>
          I'm Enrique Ortiz. Nice to meet you! I'm a Software Developer,
          Musician and occasional skater and photographer living in the
          Dominican Republic.
        </p>
        <p>
          I enjoy experimenting with and learning new things constantly—those
          are the things I'd say I do somewhat well, at least. These involve
          mainly web technologies. It's sort of what I do at my day job at
          Aragon One: I work with design and product to launch and nurture
          experiments which, in turn, drive product initiatives to find PMF in
          the Blockchain (Ethereum) space, and improve our already-going
          products. It's a fancy way to say I get to hack on fun stuff
          regularly.
        </p>

        <p>
          When not at my day job, I like listening, collecting and making music.
          I play guitar and bass, and I'm a huge fan of artists like Enya, Tycho
          and Judas Priest. My "artist" name is Evalir, which has also become my
          username on the internet for, well, pretty much everything?
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
