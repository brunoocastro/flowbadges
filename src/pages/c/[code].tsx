import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import flow from '../../constants/flow'
import { useFetch } from '../../hooks/useFetch'
import { BadgesResponse, MarketBadgeResponse } from '../../types'

const BadgePage = ({
  code,
  badge
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

  if (isFallback || !market || isLoading) return <div>Carregando Dados</div>

  const { img, count, name, position, percent } = badge

  console.log('badge', badge)

  return (
    <div>
      <div>
        <div className="flex flex-col">
          <Image src={img} alt={name} height={'100px'} width={'100px'} />
          <h1>{name}</h1>
          <div>
            <span>{position}º Posição</span>
            <span>{count} resgates</span>
            <span>{percent}</span>
            <span>
              {market.feed.map(item => `${item.action} por  ${item.value}`)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Props {
  code: string
  badge: {
    name: string
    description: string
    count: number
    img: string
    data: Date
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { code } = context.params

  const request = await fetch(flow.link.allBadges, {
    method: 'GET',
    mode: 'cors'
  })

  const badgesList: BadgesResponse = await request.json()

  const badgeIndex = badgesList.badges.findIndex(badge => {
    return badge.code.toLowerCase() === String(code).toLowerCase()
  })

  console.log('Index', badgeIndex)

  const badge = badgesList.badges[badgeIndex]

  console.log('Badge', badge)

  if (!badge) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const props = {
    code,
    badge: {
      name: badge.name,
      description: badge.description,
      count: badge.count,
      img: badge.high || badge.src,
      percent: badge.percentage_badge,
      data: badge.starts_on,
      position: badgeIndex + 1
    }
  }

  return {
    props,
    revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const request = await fetch(flow.link.allBadges, {
    method: 'GET',
    mode: 'cors'
  })

  const data: BadgesResponse = await request.json()

  const paths = data.badges.map(badge => ({
    params: {
      code: badge.code
    }
  }))

  return { paths, fallback: 'blocking' }
}

export default BadgePage
