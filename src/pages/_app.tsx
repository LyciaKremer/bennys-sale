import React from 'react'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/Layout'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import 'bootstrap/dist/css/bootstrap.min.css'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps<{}>) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
