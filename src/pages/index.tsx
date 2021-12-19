import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import getAccValue from '../services/getAccValue'

const Home: React.FC = () => {
  const [inputAccount, setInputAccount] = useState('')

  const username = 'tonelive'
  const linkAccBadges = `https://flow3r-api-master-2eqj3fl3la-ue.a.run.app//v2/user/badges/${username}`

  const { data } = useFetch(linkAccBadges)

  // console.log(data)
  // const calculate = async (username: string) => {}

  if (!data) return <h1>Carregando</h1>
  else {
    console.log(data)
  }

  return (
    <div className="bg-blue-900 h-screen w-screen">
      <Head>
        <title>Flow Badges</title>
      </Head>

      <main>
        <h1 className="text-yellow-400 font-serif text-center">
          Seja vem vindo ao Flow badges
        </h1>
        <h2 className="text-white text-center">
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
        </div>
      </main>
    </div>
  )
}

export default Home
