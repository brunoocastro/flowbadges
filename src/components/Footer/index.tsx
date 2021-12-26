import Link from 'next/link'
import { Logo } from '../Logo'

export const Footer = () => {
  return (
    <footer className="border-gradient pt-[1px]">
      <div className="bg-base-background relative">
        <div className="flex justify-between items-center max-w-4xl mx-auto text-white py-4">
          <Link href="/">
            <a>
              <Logo color="white" width="91" height="26" />
            </a>
          </Link>
          <p className="text-xs">
            Um projeto da <strong className="font-bold">comunidade</strong> para
            a <strong className="font-bold">comunidade</strong>.
          </p>
          <nav>
            <ul className="flex items-center gap-10">
              <li>
                <Link href="/sobre">
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
