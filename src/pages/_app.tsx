import '../styles/index.css'
import React from 'react'
import App from 'next/app'
import NProgressHandler from 'components/NProgressHandler'
import Head from 'next/head'
import { AuthContextProvider } from 'context/auth'
import { Toaster } from 'components/Toast'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>Tran Hoang Nam</title>
          <meta property="og:title" content="Profile | Tran Hoang Nam" />
          <meta name="twitter:site" content="@dwarvesf" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="description" content="Profile of Tran Hoang Nam." />
          <meta
            property="og:description"
            content="Profile of Tran Hoang Nam."
          />
          <meta property="og:image" content="/thumbnail.jpeg" />
          <meta name="twitter:image" content="/thumbnail.jpeg" />
        </Head>
        <AuthContextProvider>
          <NProgressHandler />
          <Component {...pageProps} />
        </AuthContextProvider>
        <Toaster />
      </>
    )
  }
}
export default MyApp
