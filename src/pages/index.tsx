import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const Home: React.FC = () => {
  const [inputAccount, setInputAccount] = useState('')

  // const username = 'tonelive'
  // const linkAccBadges = `https://flow3r-api-master-2eqj3fl3la-ue.a.run.app//v2/user/badges/${username}`

  // const { data } = useFetch(linkAccBadges)

  // console.log(data)
  // const calculate = async (username: string) => {}

  // if (!data) return <h1>Carregando</h1>
  // else {
  //   console.log(data)
  // }

  return (
    <div>
      <Head>
        <title>Flow Badges</title>
      </Head>

      <main className="h-screen w-screen flex ">
        <div className="flex flex-col text-center w-3/4 h-4/10 bg-base-black rounded-3xl shadow-xl rounded-md self-center m-auto p-10">
          <h1 className=" text-base-white text-3xl font-bold shadow-inner font-mono text-center sm:text-8xl">
            Seja bem vindo ao
          </h1>
          <Image
            className="shadow-xl"
            src={'/assets/logo-black-white.png'}
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
          {/* <h2 className="text-white text-center">
          Vamos calcular o valor da sua conta:
          </h2>
          <div className="justify-self-center">
          <input
          className="align-center"
          value={inputAccount}
          onChange={event => setInputAccount(event.target.value)}
          placeholder="Digite seu nick do flow"
          />

          <button
          onClick={() => {
            // calculate(inputAccount)
          }}
          className="bg-red-400 text-white rounded-sm"
          >
          Calcular
          </button>

          <div className="flex flex-wrap gap-3 bg-white">
          {data.badges.map(badge => (
            <div key={badge.code} className="border-4">
            <h1>Nome: {badge.code}</h1>
            <Image
            className="align-middle justify-center"
            src={badge.src}
            width={64}
            height={64}
            alt={badge.code}
            />
            </div>
            ))}
            </div>
          </div> */}
        </div>
      </main>
    </div>
  )
}

export default Home
