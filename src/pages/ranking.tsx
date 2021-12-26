import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { useMemo } from 'react'
import { useFetch } from '../hooks/useFetch'

interface badgesResponse {
  badges: any[]
  status: { error: string; message: string; reason: any }
  // eslint-disable-next-line camelcase
  total_badges: number
}

const Ranking: React.FC = () => {
  const getAllBadges =
    'https://stickers-flow3r-2eqj3fl3la-ue.a.run.app/v1/badges?sort=desc'

  const { data } = useFetch<badgesResponse>(getAllBadges)
  const badgeRanking = useMemo(() => {
    return (data && data.badges.sort((a, b) => a.count - b.count)) || []
  }, [data])

  return (
    <div>
      <Head>
        <title>Ranking - Flow Badges</title>
      </Head>

      <main className="flex justify-center">
        <div className="content-center items-center sm:w-10/12 max-w-2xl ">
          <div className="m-5 p-3 rounded-xl bg-base-backgroundDark border-2 w-8/10">
            <h1
              className="text-base-white font-cursive text-3xl text-center hover:cursor-pointer"
              onClick={() => Router.push('/')}
            >
              Ranking de emblemas por raridade
            </h1>
          </div>
          {!data && (
            <h1 className="text-xl text-center mx-auto p-3 bg-base-backgroundDark rounded-full border-2 w-[80%]">
              Carregando ranking de emblemas...
            </h1>
          )}
          <div className="pb-10 grid grid-cols-1 gap-3 px-4">
            {data &&
              badgeRanking.map((badge, index) => (
                <div
                  key={badge.code}
                  className="
                    grid
                    grid-rows-1
                    grid-cols-10
                    w-full mx-auto space-x-1
                  bg-gray-100 rounded-lg sm:p-3
                    border border-gray-500/50
                    shadow-xl text-left text-base-black"
                >
                  <div className="h-full w-16 sm:w-24 bg-transparent flex items-center justify-center rounded-md col-span-2">
                    <Image
                      src={badge.src}
                      width="100%"
                      height="100%"
                      alt={badge.name}
                    />
                  </div>
                  <div className="flex flex-col justify-between col-span-7 font-mono ">
                    <div className="flex items-center">
                      <h1 className="font-sans text-lg">Nome:</h1>
                      <h2 className="px-2 text-base truncate">{badge.name}</h2>
                    </div>
                    <div className="flex items-center">
                      <h1 className="font-sans text-lg">Código: </h1>
                      <h2 className="px-2 text-base">{badge.code}</h2>
                    </div>
                    <div className="flex items-center">
                      <h1 className="font-sans text-lg">Resgates: </h1>
                      <h2 className="px-2 text-base">{badge.count}</h2>
                    </div>
                  </div>
                  <div className="flex content-end align-text-top justify-end">
                    <h1
                      className={`
                      text-base-black
                      ${index + 1 === 1 && 'text-yellow-500'}
                      ${index + 1 === 2 && 'text-gray-400'}
                      ${index + 1 === 3 && 'text-orange-600'}
                      h-fit text-4xl
                       italic antialiased`}
                    >
                      {index + 1}º
                    </h1>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Ranking
