import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`

export default GlobalStyles
