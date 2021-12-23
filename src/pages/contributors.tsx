import Head from 'next/head'
import FooterCP from '../components/footer'

const Contributors: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Flow Badges</title>
      </Head>

      <main className="h-screen w-screen flex-col ">
        <h1 className="text-base-white">Contribuidores</h1>
        <FooterCP />
      </main>
    </div>
  )
}

export default Contributors
