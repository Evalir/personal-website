import { createGlobalStyle } from 'styled-components'
import { breakpoint } from './lib/breakpoints'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2C2A24;
    --cream: #fff3d9;
    --gray: #747474;
    --red: #D9222E;
    --yellow: #F2C968;
    --purple: #5522fa;
    --green: #5ceace;
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

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--yellow) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--yellow) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: var(--black);
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

  h1 {
    font-size: 4.8rem;
  }

  p, ul {
    font-size: 1.8rem;
    line-height: 1.7;
    ${breakpoint('small', `font-size: 1.8rem; line-height: 1.5;`)}
  }

  a {
    color: var(--black);
    text-decoration-thickness: 0.1em;
    transition: color 0.2s ease, text-decoration-color 0.125s ease;;

    &:hover {
      color: var(--purple);
      text-decoration-color: var(--green);
    }
  }

  ul > li:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`

export default GlobalStyles
