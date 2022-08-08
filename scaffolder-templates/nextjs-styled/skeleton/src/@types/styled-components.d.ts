import { theme } from 'styles/themes/main'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
