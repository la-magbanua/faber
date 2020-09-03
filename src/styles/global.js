import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.body};
  }

  body: {
    height: 100%;
  }

  #gatsby-focus-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  a {
    text-decoration: none;
  }
`
