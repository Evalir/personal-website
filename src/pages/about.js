import * as React from 'react'
import 'styled-components/macro'
import SafeLink from '../components/safeLink/safeLink'
import { Link } from 'gatsby'

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
          About
        </h1>
        <p>
          Hi! I am Enrique, and I'm happy you're here. I'm a 21 year old from
          the Dominican Republic and I also live there, making interfaces for
          the web and software in general.
        </p>
        <p>
          I like to think, read and do things related (but not limited to) life
          extension, music, the web and open source movement, crypto, design,
          different cultures and places, adrenaline, writing, photography,
          experimentation, learning, human coordination, space, and any other
          thing life has to offer at this particular moment in time. I like
          doing things that feel magnetic to me, and these are the ones which
          have the biggest particular effect on me as of Feb 27, 2021.
        </p>
        <p>
          I grew up reading blogs and surfing the web, so the cyberspace feels
          quite native to me. It's why I do that as a day job. I'm an engineer
          at&nbsp;
          <SafeLink href="https://github.com/pokt-foundation/">
            Pocket Network
          </SafeLink>
          , where I do mainly UI Engineering which is what I love the most, and
          some backend work here and there. Before that I was at&nbsp;
          <SafeLink href="https://aragon.one/">Aragon One</SafeLink>, where I
          maintained a few{' '}
          <SafeLink href="https://github.com/aragon/aragon-apps">
            user-facing applications
          </SafeLink>
          , our&nbsp;
          <SafeLink href="https://github.com/aragon/ui">
            open source design system
          </SafeLink>
          &nbsp;and&nbsp;
          <SafeLink href="https://github.com/aragon/use-wallet">
            Javascript libraries
          </SafeLink>
          . I've been extremely fortunate to work on open source for most of my
          career. If you'd like to see my code, the "Work" link on the header
          will take you to my Github profile.
        </p>
        <p>
          I'm an empathy-driven person. I like understanding other people's
          feelings, ideas and experiences. It's probably why music hits close to
          home. I don't make a lot of music nowadays, but I have a lot of
          unreleased stuff I should put out at some point. I have a&nbsp;
          <SafeLink href="https://evalir.bandcamp.com">Bandcamp</SafeLink> page
          with what's out. I also listen to a lot of music, of any genre. My
          favorite artists are Tycho, Enya and Judas Priest. I also play bass
          and guitar.
        </p>
        <p>
          This blog comes from my neglected love for writing. As a teenager, I
          was always spinning up and then forgetting blogs in various
          platforms—the worst of them probably being my Tumblr one—but never got
          around to making my *own* personal space on the internet. This is what
          this site strives to be. It's why it isn't so flashy, even if my
          industry mandates that every developer has an incredible site stuffed
          with animations and gigabytes of CSS. I could do all of that, but I
          choose not to. I want to have this blog until I die, available for
          anyone to discover and see my journey through this weird thing we call
          life. There's a few things I need to get around to, like publishing my
          posts to IPFS and archiving them correctly, but one step at a time.
        </p>
        <p>Welcome to my personal internet corner. Have fun! :)</p>
        <h2
          css={`
            font-weight: 600;
            margin-bottom: 1.6rem;
          `}
        >
          More
        </h2>
        <p>
          Ah, I love curious people like you. I encourage you to take a tour
          around this site. You may find some interesting things.
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
