import Link from 'next/link'
import { Logo } from '../Logo'

const Header = () => {
  return (
    <header className="relative top-0 right-0 left-0 w-full rounded-br-lg rounded-bl-lg border-gradient max-w-[250px] mx-auto px-[1px] pb-[1px] cursor-pointer">
      <Link href={'/'} passHref>
        <>
          <div className="absolute -inset-3 bg-base-yellow-700 rounded-lg blur opacity-10" />
          <div className="relative bg-base-background max-w-[250px] mx-auto flex justify-center items-center rounded-br-lg py-4 rounded-bl-lg">
            <Logo color="white" width="121" height="34" />
          </div>
        </>
      </Link>
    </header>
  )
}

export default Header
