import Link from 'next/link'
import {
  FaGithub,
  FaTwitch,
  FaTwitter,
  FaTelegram,
  FaWhatsapp
} from 'react-icons/fa'

import { Logo } from '../Logo'

const Footer = () => {
  return (
    <footer className="border-gradient pt-[1px] relative bottom-0 w-full">
      <div className="bg-base-background relative">
        <div className="flex flex-col md:flex-row md:flex-none gap-5 md:gap-0 justify-between items-center max-w-4xl mx-auto text-white py-4">
          <Link href="/">
            <a>
              <Logo color="white" width="91" height="26" />
            </a>
          </Link>
          <ul className="md:hidden flex gap-4 items-center text-black">
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
          <p className="text-xs">
            Um projeto da <strong className="font-bold">comunidade</strong> para
            a <strong className="font-bold">comunidade</strong>.
          </p>
          <nav>
            <ul className="flex items-center gap-10">
              <li>
                <Link href="/about">
                  <a className="underline font-semibold">Sobre nós</a>
                </Link>
              </li>
              <li>
                <Link href="/ferramentas">
                  <a className="underline font-semibold">Ferramentas</a>
                </Link>
              </li>
              <li>
                <Link href="/participe">
                  <a className="underline font-semibold">Participe</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
