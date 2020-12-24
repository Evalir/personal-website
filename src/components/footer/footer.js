import * as React from 'react'
import styled from 'styled-components'
import 'styled-components/macro'
import SafeLink from '../safeLink/safeLink'

export default function Footer() {
  return (
    <footer
      css={`
        margin-top: 5.2rem;
      `}
    >
      <Paragraph>Written by Enrique Ortiz, since 2018.</Paragraph>
      <Paragraph>
        Follow me on: <Link href="https://github.com/Evalir">@github</Link>,{' '}
        <Link href="https://twitter.com/cryptoyizus">@twitter</Link>,{' '}
        <Link href="https://www.instagram.com/hievalir/">@instagram</Link>.
      </Paragraph>
    </footer>
  )
}

const Paragraph = styled.p`
  color: var(--gray);
  font-size: 1.4rem;
`

const Link = styled(SafeLink)`
  font-size: 1.4rem;
`
