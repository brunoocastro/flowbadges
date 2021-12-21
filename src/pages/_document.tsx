import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400;500;700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body className="defaultBG">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
