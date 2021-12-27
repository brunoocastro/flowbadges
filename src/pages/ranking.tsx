/* eslint-disable camelcase */
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { useMemo, useState } from 'react'
import BaseModal from '../components/Modal'
import { useFetch } from '../hooks/useFetch'
import { BadgeData, BadgesResponse } from '../types'

const Ranking: React.FC = () => {
  const getAllBadges =
    'https://stickers-flow3r-2eqj3fl3la-ue.a.run.app/v1/badges?sort=desc'

  const { data } = useFetch<BadgesResponse>(getAllBadges)
  const badgeRanking = useMemo(() => {
    return (data && data.badges.sort((a, b) => a.count - b.count)) || []
  }, [data])

  const [showModal, setShowModal] = useState(false)
  const [badgeToModal, setBadgeToModal] = useState<BadgeData>({
    name: '',
    code: '',
    src: '',
    high: '',
    description: '',
    created_at: '',
    hq: false,
    updated_at: '',
    starts_on: '',
    creator_profile_id: '',
    status: false,
    expires_at: '',
    count: 0,
    badge_id: '',
    percentage_badge: 0
  })
  const [rankingPosition, setRankingPosition] = useState(0)
  const [maxPercentBadge, setMaxPercentBadge] = useState(1.26)

  const setBadgeModalData = (badge: BadgeData, position: number) => {
    setBadgeToModal(badge)
    setRankingPosition(position)
    setShowModal(true)
    data && setMaxPercentBadge(data?.badges[-1]?.percentage_badge || 1.26)
  }

  return (
    <div>
      <Head>
        <title>Ranking - Flow Badges</title>
      </Head>

      <main className="h-screen w-screen flex justify-center overflow-auto">
        {showModal && (
          <BaseModal
            badge={badgeToModal}
            show={showModal}
            setShow={setShowModal}
            position={rankingPosition}
            maxPercentBadge={maxPercentBadge}
          />
        )}
        <div className="content-center sm:w-10/12 max-w-2xl ">
          <div className="m-5 p-3 rounded-xl bg-base-brown-700 w-8/10">
            <h1
              className="text-base-yellow-400 font-cursive text-3xl text-center hover:cursor-pointer"
              onClick={() => Router.push('/')}
            >
              Ranking de emblemas por raridade
            </h1>
          </div>
          {!data && <h1>Carregando ranking de emblemas</h1>}
          <div className="h-screen grid grid-cols-1 gap-3 px-4">
            {data &&
              badgeRanking.map((badge, index) => (
                <div
                  key={badge.code}
                  className="
                    grid grid-rows-1 grid-cols-10
                    w-full mx-auto space-x-1
                  bg-gray-100 rounded-lg p-3
                    border border-gray-500/50
                    shadow-xl text-left text-base-black"
                  onClick={() => setBadgeModalData(badge, index + 1)}
                >
                  <div className="h-max w-20 md:w-24 bg-transparent z-10  flex origin-right col-span-2">
                    <Image
                      src={badge.src}
                      width="100%"
                      height="100%"
                      alt={badge.name}
                      onClick={() =>
                        window.open(badge.high || badge.src, '_blank')
                      }
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
                      ${index + 1 === 1 && 'text-metal-gold'}
                      ${index + 1 === 2 && 'text-metal-iron'}
                      ${index + 1 === 3 && 'text-metal-bronze'}
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
