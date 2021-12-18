import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div className="bg-blue-900 min-h-screen min-w-screen">
      <Head>
        <title>Flow Badges</title>
      </Head>

      <main>
        <h1 className="text-yellow-400 font-serif text-center">
          Seja vem vindo ao Flow badges
        </h1>
      </main>
    </div>
  )
}

export default Home
