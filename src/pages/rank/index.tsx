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
import { CopyCode } from '../../components/common/CopyToClipboard'

interface BadgeContextProps {
  selectedItem: string
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  setSelectedItem: Dispatch<SetStateAction<string>>
  toggle: (code: string) => void
  rankingPosition: number
}

export const BadgeContext = createContext<BadgeContextProps>(
  {} as BadgeContextProps
)

const Rank = () => {
  const [thisBadge, setThisBadge] = useState('')
  const [show, setShow] = useState(false)

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
  const badgeRanking = useMemo(() => {
    return data && data.badges.sort((a, b) => a.count - b.count)
  }, [data])

  const [showModal, setShowModal] = useState(false)
  const [badgeToModal, setBadgeToModal] = useState<badgeData>({
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

  const setBadgeModalData = (badge: badgeData, position: number) => {
    setBadgeToModal(badge)
    setRankingPosition(position)
    setShowModal(true)
    data && setMaxPercentBadge(data?.badges[-1]?.percentage_badge || 1.26)
  }

  console.log('app', BadgeContext.displayName)
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
            rankingPosition
          }}
        >
          <CopyCode item={thisBadge} show={show} />
          <div className="content-center sm:w-10/12 max-w-4xl text-slate-100 p-16">
            <div className="w-full">
              <Search />
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-9 gap-[16px] mb-48">
                <h2 className="col-span-full">Pódio</h2>
                {data && (
                  <>
                    <LargeCard badges={badgeRanking} />
                  </>
                )}
              </div>
              <div
                className={`mt-16 grid grid-cols-1 sm:grid-cols-8 gap-[16px]`}
              >
                <h2 className="col-span-full">Todas badges</h2>
                {data && (
                  <>
                    <SmallCard badges={badgeRanking} />
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
