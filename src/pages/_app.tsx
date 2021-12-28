import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
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
