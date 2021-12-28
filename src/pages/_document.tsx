import Document, { Head, Html, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SocialBar from '../components/SocialBar'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="relative bg-home bg-base-backgroundDark h-screen w-screen overflow-hidden">
          <div className="min-h-screen w-screen flex flex-col justify-between">
            <Header />
            <SocialBar />
            <Main />
            <Footer />
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}
