/* eslint-disable camelcase */
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState
} from 'react'
import { useFetch } from '../../hooks/useFetch'
import { LargeCard } from '../../components/LargeCard'
import { SmallCard } from '../../components/SmallCard'
import { Search } from '../../components/Search'
import { BadgesResponse } from '../../types'
import filters from '../../constants/filters'

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

const Rank = () => {
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

  const getAllBadges =
    'https://stickers-flow3r-2eqj3fl3la-ue.a.run.app/v1/badges?sort=desc'

  const { data } = useFetch<BadgesResponse>(getAllBadges)
  // const badgesList = useMemo(() => data?.badges, [data])
  const badgesList = data?.badges

  const badgesOrdered = badgesList?.sort(
    orderingMode === filters.byRarity.code
      ? filters.byRarity.filterFunction
      : filters.byDate.filterFunction
  )

  const badgesOnSearch =
    (searchText &&
      badgesOrdered?.filter(({ code, name, description }) => {
        return (
          code.toLowerCase().includes(searchText.toLowerCase()) ||
          name.toLowerCase().includes(searchText.toLowerCase()) ||
          description.toLowerCase().includes(searchText.toLowerCase())
        )
      })) ||
    []

  return (
    <>
      <main className="h-screen w-screen flex flex-wrap justify-center overflow-x-hidden">
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
          <div className="content-center sm:w-10/12 max-w-4xl text-slate-100 p-16">
            <div className="w-full">
              <Search />
              {searchText === '' ? (
                <>
                  <div className="mt-16 grid grid-cols-1 sm:grid-cols-9 gap-[16px] mb-48">
                    <h2 className="col-span-full">Pódio</h2>
                    {data && (
                      <>
                        <LargeCard badges={badgesList} />
                      </>
                    )}
                  </div>
                  <div
                    className={`mt-16 grid grid-cols-1 sm:grid-cols-8 gap-[16px]`}
                  >
                    <h2 className="col-span-full">Todas badges</h2>
                    {data && (
                      <>
                        <SmallCard badges={badgesList} />
                      </>
                    )}
                  </div>
                </>
              ) : (
                <div
                  className={`mt-16 grid grid-cols-1 sm:grid-cols-8 gap-[16px]`}
                >
                  <h2 className="col-span-full">
                    Pesquisando por {'"' + searchText + '"'}
                  </h2>
                  {data && (
                    <>
                      <SmallCard badges={badgesOnSearch} />
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </BadgeContext.Provider>
      </main>
    </>
  )
}

export default Rank
