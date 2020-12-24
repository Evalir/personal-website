import { createGlobalStyle } from 'styled-components'
import { breakpoint } from './lib/breakpoints'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2C2A24;
    --cream: #fff3d9;
    --gray: #747474;
    --red: #D9222E;
    --yellow: #F2C968;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  p, ul {
    font-family: 'Source Sans Pro', 'Jost', Helvetica, sans-serif;
    font-size: 1.6rem;
    line-height: 2.5rem;
    ${breakpoint('small', `font-size: 2rem; line-height: 4rem;`)}
  }

  a {
    text-decoration: none;
    background: linear-gradient(to bottom, var(--yellow) 0%, var(--yellow) 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 4px 5px;
    color: var(--black);
    transition: background-size 0.4s;

    &:hover {
      background-size: 3px 50px;
    }
  }

  ul > li:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`

export default GlobalStyles
