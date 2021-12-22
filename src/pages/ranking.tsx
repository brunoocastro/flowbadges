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

      <main className="h-screen w-screen">
        <div className="content-center w-10/12">
          <div className="m-4 p-3 rounded-xl bg-base-brown-700 w-8/10">
            <h1
              className="text-base-yellow-400 font-cursive text-3xl text-center hover:cursor-pointer"
              onClick={() => Router.push('/')}
            >
              Ranking de emblemas por raridade
            </h1>
          </div>
          {!data && <h1>Carregando ranking de emblemas</h1>}
          <div
            className="h-screen grid grid-cols-1  gap-3 px-4
          overflow-auto"
          >
            {data &&
              badgeRanking.map(badge => (
                <div
                  key={badge.code}
                  className="flex
                    grid-flow-row
                    w-full mx-auto space-x-6
                  bg-gray-100 shadow-md rounded-lg p-2
                    border border-gray-500/50"
                >
                  <div className="flex-1 object-cover mr-4">
                    <Image
                      className="w-12 h-10 object-cover mr-4"
                      src={badge.src}
                      width="100"
                      height="100"
                      layout="responsive"
                      objectFit="contain"
                      alt={badge.name}
                    />
                  </div>
                  <div className="flex- flex-col">
                    <h1 className="text-mono flex-row">Nome: {badge.name}</h1>

                    <h1 className="text-base">Código: {badge.code}</h1>
                    <h1>Resgates: {badge.count}</h1>
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
