/* eslint-disable camelcase */
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import flow from '../../constants/flow'
import { useFetch } from '../../hooks/useFetch'
import { MarketBadgeResponse } from '../../types'
import verifyPodcast from '../../utils/verifyPodcast'
import { ExternalLinkIcon } from '@radix-ui/react-icons'

interface Props {
  code: string
  badge: {
    name: string
    description: string
    count: number
    img: string
    date: string
    percent: string
    position: number
  }
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

const BadgeContent = (props: Props) => {
  console.log('Props', props)
  const { code, badge } = props

  const { isFallback } = useRouter()

  const marketLink = encodeURI(flow.link.badgeMarketData(String(code)))

  const { data: market, isLoading } = useFetch<MarketBadgeResponse>(
    marketLink,
    {
      keepalive: true,
      method: 'get',
      mode: 'cors'
    }
  )
  const { data } = useFetch<badgeFeedData>(flow.link.badgeMarketData(code))

  const { count, date, img, name, position, percent } = props.badge

  const programDate = new Date(date)

  console.log(date)

  const podcast = useMemo(() => verifyPodcast(img), [img])
  console.log('Code', podcast, img)

  // const rarity = useMemo(
  //   () => (maxPercentBadge - percentage_badge) * 100,
  //   [percentage_badge, maxPercentBadge]
  // )

  if (isFallback || isLoading || !market || !props.badge || !props.code)
    return <div>Carregando Dados</div>

  return (
    <div
      className="relative z-50
      h-full w-full
      text-base-white p-4
      "
      // bg-opacity-90 m-auto left-0 right-0 top-0 bottom-0
      // w-3/4 max-w-3xl
      // rounded-lg h-auto max-h-[600px]
      // border-2 border-base-yellow-700 bg-base-yellow-400
    >
      <Head>
        <title>{name} | Flow Badges</title>
      </Head>
      {badge && position && (
        <div className="flex flex-col text-base-black font-sans text-lg">
          <div
            className="flex flex-col w-full h-full mx-auto
            content-center justify-center text-center"
          >
            <div className="header -top-24 relative flex flex-col gap-3">
              <div
                className="relative h-48 w-48 md:h-56 md:w-56 bg-yellow-300 mx-auto border-2 border-yellow-300
              rounded-md flex content-center "
              >
                <Image
                  className="rounded-md absolute cursor-pointer "
                  src={img}
                  layout="fill"
                  alt={name}
                  objectFit="cover"
                  onClick={() => window.open(img, '_blank')}
                />
              </div>
              <h1 className="font-sans text-4xl font-bold text-base-white">
                {code.toUpperCase()}
              </h1>
              <div className="flex justify-center text-sm text-gray-400  gap-2">
                <span>{position}º Posição</span>|<span>{count} resgates</span>|
                <span>{percent}% Raro</span>
              </div>
            </div>
            <div className="buttons grid grid-cols-2 grid-rows-1  gap-3">
              <button className="rounded-xl border-2 h-12">#{code}</button>
              <button className="rounded-xl border-2 h-12 flex justify-center items-center x">
                <span>Ir para o mercado</span>
                <ExternalLinkIcon />
              </button>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-base-white">Podcast: {podcast}</h1>
    </div>
  )
}

export default BadgeContent
