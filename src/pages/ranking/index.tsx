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
import { ArrowFunction } from 'typescript'

interface BadgeContextProps {
  selectedItem: string
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  setSelectedItem: Dispatch<SetStateAction<string>>
  toggle: (code: string) => void
  filterFunction: ArrowFunction
  setFilterFunction: Dispatch<SetStateAction<ArrowFunction>>
}

export const BadgeContext = createContext<BadgeContextProps>(
  {} as BadgeContextProps
)

const Rank = () => {
  const [thisBadge, setThisBadge] = useState('')
  const [show, setShow] = useState(false)

  const [filterFunction, setFilterFunction] = useState()

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

  const badgesOrderedList = badgesList?.sort((a, b) => {
    return a.count - b.count
  })

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
            filterFunction: filterFunction,
            setFilterFunction: setFilterFunction
          }}
        >
          <div className="content-center sm:w-10/12 max-w-4xl text-slate-100 p-16">
            <div className="w-full">
              <Search />
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
            </div>
          </div>
        </BadgeContext.Provider>
      </main>
    </>
  )
}

export default Rank
