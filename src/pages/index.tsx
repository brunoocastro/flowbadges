import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Flow Badges</title>
      </Head>

      <main className="h-screen w-screen flex flex-col ">
        <div className="flex flex-col text-center w-3/4 h-4/10 bg-base-black rounded-3xl shadow-xl self-center m-auto p-10">
          <h1 className=" text-base-white text-3xl font-bold shadow-inner font-mono text-center sm:text-8xl">
            Seja bem vindo ao
          </h1>
          <Image
            className="shadow-xl"
            src={'/assets/logo-green-white.svg'}
            alt="Logo Flow Badges"
            width="100%"
            height="30%"
            layout="responsive"
            objectFit="contain"
          />

          <button
            onClick={() => Router.push('/ranking')}
            className="rounded-full font-mono text-xl mt-5 sm:text-2xl bg-blue-600 transition-all w-fit px-5 sm:px-10 py-2 m-auto hover:bg-blue-800 hover:text-base-yellow-400"
          >
            Ranking
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home
