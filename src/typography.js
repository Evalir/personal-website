import { createGlobalStyle } from 'styled-components'
import JostBook from './fonts/Jost400.otf'
import JostBookItalic from './fonts/Jost400I.otf'
import JostSemi from './fonts/Jost600.otf'
import JostSemiItalic from './fonts/Jost600I.otf'
import JostBold from './fonts/Jost700.otf'
import JostBoldItalic from './fonts/Jost700I.otf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: "Jost";
    src: url(${JostBook});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Jost";
    src: url(${JostBookItalic});
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: "Jost";
    src: url(${JostSemi});
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Jost";
    src: url(${JostSemiItalic});
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: "Jost";
    src: url(${JostBold});
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Jost";
    src: url(${JostBoldItalic});
    font-weight: 700;
    font-style: italic;
  }
  html {
    font-family: 'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    text-decoration-skip-ink: none;
  }
`

export default Typography
