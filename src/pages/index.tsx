import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowRight } from 'react-icons/hi'
import filters from '../constants/filters'
import flow from '../constants/flow'
import socialLinks from '../constants/social'

const Home: React.FC = () => {
  const links = [
    {
      title: 'Rank dos Emblemas',
      description:
        'Ranking com a raridade de cada emblema, baseado no Mercado de Trocas.',
      href: '/ranking',
      coverUrl: '/assets/rank-badges-cover.png'
    },
    // {
    //   title: 'Calcule sua Conta',
    //   description:
    //     'Descubra quanto vale sua conta em Sparks baseado nos seus emblemas resgatados.',
    //   href: '/calcule-sua-conta',
    //   coverUrl: '/assets/profile-stats-cover.png'
    // }
    {
      title: 'Discord',
      description:
        'Entre no nosso discord, faça parte da comunidade e ajude na construção dessa plataforma',
      href: socialLinks.discord,
      coverUrl: '/assets/profile-stats-cover.png'
    }
  ]

  return (
    <>
      <div>
        <main className="w-full h-full grid place-items-center mt-10 md:mt-0 mb-10 ">
          <nav>
            <ul className="grid grid-cols-[289px] md:grid-cols-[289px_289px] gap-8">
              {links.map(link => (
                <li
                  key={link.href}
                  className="p-[2px] border-gradient-two rounded-lg relative"
                >
                  <div className="absolute -inset-2 bg-base-yellow-700 rounded-lg blur opacity-10" />
                  <div className="relative h-full bg-base-background rounded-lg p-5 text-center">
                    <Image
                      src={link.coverUrl}
                      width={249}
                      height={171}
                      quality={100}
                      alt="Imagem com emblemas do flow"
                    />
                    <h2 className="my-8 text-lg font-semibold">{link.title}</h2>
                    <p className="">{link.description}</p>
                    <Link href={link.href}>
                      <a className="border-gradient-two w-52 h-11 flex justify-center items-center gap-3 mt-10 rounded-lg mx-auto text-base-yellow-700 text-lg duration-150 hover:text-xl">
                        Acessar
                        <HiOutlineArrowRight />
                      </a>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </main>
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async context => {
  const { username } = context.params

  const request = await fetch(flow.link.profile(String(username)), {
    method: 'GET',
    mode: 'cors'
  })

  const { user, count } = await request.json()

  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const props = {
    username,
    userData: {
      ...user
    },
    count
  }

  return {
    props,
    revalidate: 30
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const request = await fetch(flow.link.ranking, {
    method: 'GET',
    mode: 'cors'
  })

  const data = await request.json()

  data.badges.sort(filters.byRarity.filterFunction).splice(25)

  const paths = data.ranking.map(user => ({
    params: {
      code: user.username
    }
  }))

  console.log(paths)

  return { paths, fallback: 'blocking' }
}
