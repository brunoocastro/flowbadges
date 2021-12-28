/* eslint-disable camelcase */
import Image from 'next/image'
import { Dispatch, SetStateAction, useMemo } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { BadgeData } from '../../types'
import verifyPodcast from '../../utils/verifyPodcast'

interface ModalProps {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  position: number
  badge: BadgeData
  maxPercentBadge: number
}

interface tradeData {
  name: string
  type: string
  expires_at: string
  high: string
  accept_sparks: boolean
  starts_on: string
  value: number
  updated_at: string
  created_at: string
  accept_trade: boolean
  hq: boolean
  status: boolean
  description: string
  code: string
  src: string
}

interface feedData {
  user: {
    avatar: string
    username: string
  }
  action: {
    label: string
  }
  value: {
    sparks: number
  }
  executed_at: string
}

interface badgeFeedData {
  status: {
    error: boolean
    message: string
    reason?: string
  }
  feed: feedData[]
  actualOffersDesc: tradeData[]
  actualOffersAsc: tradeData[]
  actualTradesDesc: tradeData[]
  actualTradesAsc: tradeData[]
}

const BaseModal = (props: ModalProps) => {
  console.log('Props', props)
  const { show, setShow, position, badge, maxPercentBadge } = props

  const { src, name, code, high, percentage_badge, starts_on } = props.badge

  const date = new Date(starts_on)

  const podcast = useMemo(() => verifyPodcast(src), [src])
  console.log('Code', src, podcast)

  const rarity = useMemo(
    () => (maxPercentBadge - percentage_badge) * 100,
    [percentage_badge, maxPercentBadge]
  )

  const badgeDataLink = (code: string) =>
    `https://stickers-flow3r-2eqj3fl3la-ue.a.run.app/v1/market/feed?code=${code}`

  const { data } = useFetch<badgeFeedData>(badgeDataLink(code))

  return (
    show && (
      <div
        className="absolute z-50 w-3/4 max-w-3xl border-2 border-base-yellow-700 rounded-lg h-auto max-h-[600px] bg-base-yellow-400
                bg-opacity-90 m-auto left-0 right-0 top-0 bottom-0
                text-base-white p-4"
      >
        <div className="w-full h-8" onClick={() => setShow(false)}>
          Fechar
        </div>
        {badge && position && (
          <div className="flex flex-row text-base-black font-sans text-lg">
            <div className="flex flex-col w-24 h-28 content-center justify-center text-center">
              <div className="h-max w-20 md:w-24 mx-auto rounded-md bg-transparent flex content-center ">
                <Image
                  src={src}
                  width="100%"
                  height="100%"
                  alt={name}
                  onClick={() => window.open(high || src, '_blank')}
                />
              </div>
              <h1 className="font-mono text-base">{code}</h1>
            </div>
            <div className="flex flex-col ml-2 w-5/6 ">
              <h1 className="text-center">{name}</h1>
              <div className="flex justify-around">
                <div className="flex">
                  <h1>Ranking:</h1>
                  <h1
                    className={`${position === 1 && 'text-metal-gold'}
                    ${position === 2 && 'text-metal-iron'}
                    ${position === 3 && 'text-metal-bronze'}
                    italic font-mono ml-4`}
                  >
                    {position}º
                  </h1>
                </div>
                <div className="flex">
                  <h1>Data: </h1>
                  <h1 className="ml-1">{date.toLocaleDateString('pt-BR')}</h1>
                </div>
              </div>
              <div className="relative pt-1 text-base-black transition-all">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold ml-1 inline-block py-1 px-2 uppercase rounded-full  bg-base-gray text-base-white">
                      Raridade
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block mr-1 ">
                      {percentage_badge}
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-base-gray">
                  <div
                    style={{ width: `${rarity}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-base-yellow-700"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>{data?.status.message}</div>

        {console.log(rarity)}
        {console.log(badge)}
        <h1 className="text-base-white">{podcast}</h1>
        <h1 className="text-base-white">MODAL</h1>
      </div>
    )
  )
}

export default BaseModal
