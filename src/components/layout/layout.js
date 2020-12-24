import React from 'react'
import 'styled-components/macro'
import Footer from '../footer/footer'
import Nav from '../nav/nav'
import GlobalStyles from '../../global-styles'
import Typography from '../../typography'

export default function Layout({ children }) {
  return (
    <div
      css={`
        min-height: 100vh;
        max-width: 72rem;
        margin: 0 auto;
        padding: 1.6rem;
      `}
    >
      <Nav />
      <GlobalStyles />
      <Typography />
      {children}
      <Footer />
    </div>
  )
}
