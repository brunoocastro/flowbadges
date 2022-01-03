import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import BadgeContent from '../../components/BadgeContent'
import flow from '../../constants/flow'
import { BadgesResponse } from '../../types'

const BadgePage = ({
  code,
  badge
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <div>
        <div
          className="
        absolute z-50 w-3/4 max-w-3xl
        rounded-lg h-auto max-h-[600px]
        bg-opacity-90 m-auto left-0 right-0 top-0 bottom-0
        text-base-white p-4
         border-2 border-base-yellow-700 bg-base-background
        "
        >
          <BadgeContent badge={badge} code={code} />
        </div>
      </div>
    </div>
  )
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

  const badge = badgesList.badges[badgeIndex]

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
      position: badgeIndex
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
