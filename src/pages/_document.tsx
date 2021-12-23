import Document, { Head, Html, Main, NextScript } from 'next/document'
import FooterCP from '../components/footer'

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
        <body className="defaultBG">
          <Main />
          <NextScript />
          <FooterCP />
        </body>
      </Html>
    )
  }
}
