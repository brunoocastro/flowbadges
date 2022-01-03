/* eslint-disable camelcase */
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useState
} from 'react'
import { useFetch } from '../../hooks/useFetch'
import { LargeCard } from '../../components/LargeCard'
import { SmallCard } from '../../components/SmallCard'
import { Search } from '../../components/Search'
import { BadgesResponse } from '../../types'
import filters from '../../constants/filters'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import flow from '../../constants/flow'

interface BadgeContextProps {
  selectedItem: string
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  setSelectedItem: Dispatch<SetStateAction<string>>
  toggle: (code: string) => void
  orderingMode: string
  setOrderingMode: Dispatch<SetStateAction<string>>
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
}

export const BadgeContext = createContext<BadgeContextProps>(
  {} as BadgeContextProps
)

const Rank = ({ badges }) => {
  const [thisBadge, setThisBadge] = useState('')
  const [show, setShow] = useState(false)

  const [orderingMode, setOrderingMode] = useState(filters.byRarity.code)
  const [searchText, setSearchText] = useState('')

  const toggle = useCallback(
    code => {
      if (thisBadge === code) {
        setShow(true)
      }
    },
    [thisBadge]
  )

  const badgesOrdered = badges?.sort(
    orderingMode === filters.byRarity.code
      ? filters.byRarity.filterFunction
      : filters.byDate.filterFunction
  )

  const badgesOnSearch =
    (searchText &&
      badgesOrdered?.filter(({ code, name, description, src, high }) => {
        return (
          code.toLowerCase().includes(searchText.toLowerCase()) ||
          name.toLowerCase().includes(searchText.toLowerCase()) ||
          description.toLowerCase().includes(searchText.toLowerCase()) ||
          src?.toLowerCase().includes(searchText.toLowerCase()) ||
          high?.toLowerCase().includes(searchText.toLowerCase())
        )
      })) ||
    []

  return (
    <>
      <Head>
        <title>Ranking - Flow Badges</title>
      </Head>
      <main className="min-h-fit w-screen flex flex-wrap justify-center overflow-x-hidden">
        <BadgeContext.Provider
          value={{
            selectedItem: thisBadge,
            show: show,
            setShow: setShow,
            setSelectedItem: setThisBadge,
            toggle,
            orderingMode: orderingMode,
            setOrderingMode: setOrderingMode,
            searchText: searchText,
            setSearchText: setSearchText
          }}
        >
          <div className="content-center sm:w-10/12 max-w-4xl text-slate-100 p-4 ">
            <div className="w-full flex flex-col">
              <Search />
              <div
                className="overflow-y-scroll px-3
              scrollbar-thin scrollbar-thumb-base-white scrollbar-track-base-background"
              >
                {searchText === '' ? (
                  <>
                    <div className="mt-1 xl:mt-4 grid grid-cols-1 sm:grid-cols-9 gap-[16px] mb-10">
                      <h2 className="col-span-full">Pódio</h2>
                      {badges && (
                        <>
                          <LargeCard badges={badges} />
                        </>
                      )}
                    </div>
                    <div
                      className={`mt-4 grid grid-cols-1 sm:grid-cols-8 gap-[16px]`}
                    >
                      <h2 className="col-span-full">Todas badges</h2>
                      {badges && (
                        <>
                          <SmallCard badges={badges} />
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <div
                    className={`mt-4 grid grid-cols-1 sm:grid-cols-8 gap-[16px]`}
                  >
                    <h2 className="col-span-full">
                      Pesquisando por &#34;{searchText}&#34;
                    </h2>
                    {badges && (
                      <>
                        <SmallCard badges={badgesOnSearch} />
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </BadgeContext.Provider>
      </main>
    </>
  )
}

export default Rank

export const getStaticProps: GetStaticProps = async () => {
  const request = await fetch(flow.link.allBadges, {
    method: 'GET',
    mode: 'cors'
  })
  const data: BadgesResponse = await request.json()

  return {
    props: {
      badges: data.badges
    },
    revalidate: 30
  }
}
