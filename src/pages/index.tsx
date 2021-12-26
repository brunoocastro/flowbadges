import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowRight } from 'react-icons/hi'
import {
  FaGithub,
  FaTwitch,
  FaTwitter,
  FaTelegram,
  FaWhatsapp
} from 'react-icons/fa'

import { Logo } from '../components/Logo'
import { Footer } from '../components/Footer'

const Home: React.FC = () => {
  const links = [
    {
      title: 'Rank dos Emblemas',
      description:
        'Ranking com a raridade de cada emblema, baseado no Mercado de Trocas.',
      href: '/ranking',
      coverUrl: '/assets/rank-badges-cover.png'
    },
    {
      title: 'Calcule sua Conta',
      description:
        'Descubra quanto vale sua conta em Sparks baseado nos seus emblemas resgatados.',
      href: '/calcule-sua-conta',
      coverUrl: '/assets/profile-stats-cover.png'
    }
  ]

  return (
    <>
      <div className="bg-home bg-base-backgroundDark">
        <Head>
          <title>Flow Badges</title>
        </Head>

        <ul className="hidden md:block fixed right-3 top-1/2 -translate-y-1/2 space-y-4 text-black">
          <li>
            <a
              className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
              href="https://github.com/brunoocastro/flowbadges"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub aria-label="GitHub" size={20} />
            </a>
          </li>
          <li>
            <a
              className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
              href=""
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaWhatsapp aria-label="Whatsapp" size={20} />
            </a>
          </li>
          <li>
            <a
              className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
              href=""
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTelegram aria-label="Telegram" size={20} />
            </a>
          </li>
          <li>
            <a
              className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
              href=""
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTwitter aria-label="Twitter" size={20} />
            </a>
          </li>
          <li>
            <a
              className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
              href="https://www.twitch.tv/tonelive"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTwitch aria-label="Twitch" size={20} />
            </a>
          </li>
        </ul>

        <header className="rounded-br-lg rounded-bl-lg border-gradient max-w-[250px] mx-auto px-[1px] pb-[1px] relative">
          <div className="absolute -inset-3 bg-base-yellow-700 rounded-lg blur opacity-10" />
          <div className="relative bg-base-background max-w-[250px] mx-auto flex justify-center items-center rounded-br-lg py-4 rounded-bl-lg">
            <Logo color="white" width="121" height="34" />
          </div>
        </header>

        <main className="min-h-screen w-full grid place-items-center mt-10 md:mt-0 mb-10">
          <nav>
            <ul className="grid grid-cols-[289px] md:grid-cols-[289px_289px] gap-8">
              {links.map(link => (
                <li
                  key={link.href}
                  className="p-[2px] border-gradient-two rounded-lg relative"
                >
                  <div className="absolute -inset-2 bg-base-yellow-700 rounded-lg blur opacity-10" />
                  <div className="relative bg-base-background rounded-lg p-5 text-center">
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
                      <a className="border-gradient-two w-52 h-11 flex justify-center items-center gap-3 mt-10 rounded-lg mx-auto text-base-yellow-700">
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
      <Footer />
    </>
  )
}

export default Home
