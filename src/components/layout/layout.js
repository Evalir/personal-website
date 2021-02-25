import React from 'react'
import { Helmet } from 'react-helmet'
import 'styled-components/macro'
import Footer from '../footer/footer'
import Nav from '../nav/nav'
import GlobalStyles from '../../global-styles'

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
      <Helmet>
        <title>Enrique Ortiz</title>
      </Helmet>
      <Nav />
      <GlobalStyles />
      {children}
      <Footer />
    </div>
  )
}
