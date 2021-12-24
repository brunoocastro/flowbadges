import Image from 'next/image'
import Link from 'next/link'

const textButtons = [
  ['Sobre', '/about'],
  ['Quem somos?', '/contributors'],
  ['Ferramentas', '/']
]

const iconButtons = []

const FooterCP: React.FC = () => (
  <footer className="relative flex justify-around align-middle flex-col bg-base-blue-700 w-full h-24 bottom-0">
    <div className="my-auto flex justify-around align-middle content-center text-justify ">
      <Link href={'/'} passHref>
        <div className="h-full w-[20%] grow-1 bg-slate-500 cursor-pointer">
          <Image
            src={'/assets/logo-green-white.svg'}
            width="100%"
            height="100%"
            alt={'Logo do FlowBadges'}
          />
        </div>
      </Link>
      <p className="ml-4 text-xs h-full w-auto font-normal text-justify">
        Um projeto da <h1 className="font-bold">comunidade</h1>
        para a <h1 className="font-bold">comunidade.</h1>
      </p>
      {textButtons.map(([title, url]) => (
        <Link href={url} passHref key={title}>
          <h1 className="rounded-lg text-center h-full w-auto cursor-pointer text-base-white font-bold bg-yellow-300 hover:text-base-yellow-400">
            {title}
          </h1>
        </Link>
      ))}
    </div>
  </footer>
)

export default FooterCP
