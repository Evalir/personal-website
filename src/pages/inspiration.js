import * as React from 'react'
import { Link } from 'gatsby'
import 'styled-components/macro'
import SafeLink from '../components/SafeLink/SafeLink'

export default function Inspiration() {
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
          Inspiration
        </h1>
        <p>You might be wondering, what is this even?</p>
        <p>
          I've been trying to re-do my site since some time, but my
          perfectionism didn't really let me like any of the 15 or so designs I
          came up with, so I ended up taking layouts, sections, or pages from
          sites I love to make it. Here are the details:
        </p>
        <ul>
          <li>
            The structure and look of the site is taken mainly from&nbsp;
            <SafeLink href="https://tdh.se/">Thord D. Hedengren's</SafeLink>
            &nbsp;and{' '}
            <SafeLink href="https://www.andersnoren.se/">
              Anders Noren's
            </SafeLink>{' '}
            site. Mainly because I wanted something that feels personal, and
            also as a some sort of homage as they were the guys that I found
            online that did cool stuff with the web when I was 15.
          </li>
          <li>
            The journal / blog post format is also from Thord's website. It's a
            good way to do "microblogging" that feels a bit more personal, and
            twitter's tone just ain't the one these days.
          </li>
          <li>
            The tone of the site itself is inspired a lot on{' '}
            <SafeLink href="http://liza.io/">Liza Shulyayeva's</SafeLink> site.
            Lot's of blogging, sometimes with a personal, sometimes with a
            technical tone, but always fun.
          </li>
          <li>
            The now page is from &nbsp;
            <SafeLink href="https://sive.rs/nowff">Derek Sivers</SafeLink>. I
            just think it's a cool concept.
          </li>
          <li>
            The weird, non-intuitive and probably rule-violating way of
            navigating through the site is inspired by the weird website of{' '}
            <SafeLink href="https://avanier.now.sh/j.html">
              Josh Avanier
            </SafeLink>
            . I'm not as hardcore as he is on making websites light, but I do
            like the personal, maze-like vibe. You gotta make your own space in
            the internet.
          </li>
        </ul>
      </main>
    </>
  )
}
