/* eslint-disable camelcase */
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import flow from '../../constants/flow'
import { useFetch } from '../../hooks/useFetch'
import { MarketBadgeResponse } from '../../types'
import verifyPodcast from '../../utils/verifyPodcast'
import { ExternalLinkIcon, CopyIcon } from '@radix-ui/react-icons'
import toast from 'react-hot-toast'
import TradeCard from '../TradeCard'

const UserProfile = props => {
  const { username } = props

  const { isFallback } = useRouter()

  const profileLink = encodeURI(flow.link.profile(String(username)))

  const { data: market, isLoading } = useFetch<MarketBadgeResponse>(
    profileLink,
    {
      keepalive: true,
      method: 'get',
      mode: 'cors'
    }
  )

  const { count, date, img, name, position, percent } = props.badge

  const programDate = useMemo(() => new Date(date), [date])

  const podcast = useMemo(() => verifyPodcast(img), [img])

  if (isFallback || !props.badge || !props.code)
    return <div>Carregando Dados</div>

  return (
    <div
      className="relative z-50
      h-full w-full
      text-base-white p-8 2xl:p-4
      "
    >
      <Head>
        <title>{name} | Flow Badges</title>
      </Head>

      <div
        className="h-full grid gap-4 text-base-white
         font-sans text-lg -top-20 2xl:-top-24 relative"
      >
        <div
          className="w-full h-fit mx-auto
            content-center justify-center text-center "
        >
          <div className="header flex flex-col gap-3">
            <div
              className="relative h-36 w-36 2xl:h-56 2xl:w-56 bg-yellow-300 mx-auto border-2 border-yellow-300
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
            <h1 className="font-sans text-3xl 2xl:text-4xl font-bold text-base-white">
              {username.toUpperCase()}
            </h1>

            <h1 className="font-sans text-xl font-bold text-base-white">
              {podcast ? `${podcast} do` : 'Ao vivo no '} dia{' '}
              {programDate.toLocaleDateString('pt-BR')}
            </h1>

            <div className="flex justify-center text-sm text-gray-400  gap-2">
              <span>{position}º Posição</span>|<span>{count} resgates</span>|
              <span>{percent}% Raro</span>
            </div>
          </div>
        </div>
        <div className="buttons grid grid-cols-2 grid-rows-1 gap-3  h-12 text-base-white ">
          <button
            onClick={() => {
              navigator.clipboard.writeText(username)
              toast.success(`O código "${username}" foi copiado!`)
            }}
            className="rounded-xl border-2 border-base-yellow-700  flex justify-center items-center gap-3"
          >
            <span>#{username}</span>
            <CopyIcon color="#FFB709" />
          </button>
          <a
            href={flow.link.market}
            target={'_blank'}
            rel="noreferrer"
            className="rounded-xl border-2 border-base-yellow-700 flex justify-center items-center gap-3 grid-flow-row"
          >
            <span>Ir para o mercado</span>
            <ExternalLinkIcon color="#FFB709" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
