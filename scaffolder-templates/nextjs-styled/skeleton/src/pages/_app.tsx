import * as React from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/styles/global'
import { theme } from '@/styles/themes/main'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type MyAppProps = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default MyApp
