import React from 'react'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/Layout'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import 'bootstrap/dist/css/bootstrap.min.css'
import { ModalProvider } from 'styled-react-modal'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps<{}>) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <ModalProvider>
            <Component {...pageProps} />
            <GlobalStyle />
          </ModalProvider>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
