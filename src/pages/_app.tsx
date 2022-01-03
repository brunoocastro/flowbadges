import { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Flow Badges</title>
        {/* <link rel="icon" href="favicon.ico" /> */}
      </Head>
      <Toaster
        position="top-right"
        reverseOrder={true}
        toastOptions={{
          className: 'Toast',
          duration: 5000,
          style: {
            background: '#131C25',
            color: '#FBFBFB'
          }
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
