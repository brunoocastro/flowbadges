/* eslint-disable camelcase */
import { useMemo } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { LargeCard } from '../../components/LargeCard'
import { SmallCard } from '../../components/SmallCard'
import { Search } from '../../components/Search'
import Hero from '../../components/Hero'
import { BadgesResponse } from '../../types'

const Rank = () => {
  const getAllBadges =
    'https://stickers-flow3r-2eqj3fl3la-ue.a.run.app/v1/badges?sort=desc'

  const { data } = useFetch<BadgesResponse>(getAllBadges)
  const badgeRanking = useMemo(() => {
    return data && data.badges.sort((a, b) => a.count - b.count)
  }, [data])

  return (
    <>
      <main className="h-screen w-screen flex flex-wrap justify-center overflow-x-hidden">
        <div className="content-center sm:w-10/12 max-w-4xl text-slate-100 p-16">
          <Hero />
          <div className="w-full">
            <Search />
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-9 gap-[16px] mb-48">
              <h2 className="col-span-full">Recomendados</h2>
              {data && (
                <>
                  <LargeCard badges={badgeRanking} />
                </>
              )}
            </div>
            <div className={`mt-16 grid grid-cols-1 sm:grid-cols-8 gap-[16px]`}>
              <h2 className="col-span-full">Outras badges</h2>
              {data && (
                <>
                  <SmallCard badges={badgeRanking} />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Rank
