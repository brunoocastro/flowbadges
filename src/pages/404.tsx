import Head from 'next/head'

import { AiOutlineHome } from 'react-icons/ai'

import Link from 'next/link'

const Error404: React.FC = () => {
  return (
    <>
      <div className="h-72">
        <Head>
          <title>Flow Badges</title>
        </Head>

        <main className="h-72 w-full grid place-items-center mt-10 md:mt-0 mb-10">
          <div className="flex h-60 p-5 flex-col items-center justify-center text-center bg-base-gray border-2 relative rounded-lg shadow-xl">
            <p className="text-xl p-6">Esta página ainda não existe!</p>
            <p className="p-2">
              Caso queira voltar pra página inicial, clique no botão:
            </p>

            <Link href={'/'} passHref>
              <button className="bg-base-white text-base-black p-3 mt-3 px-8 w-fit rounded-lg">
                <AiOutlineHome />
              </button>
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}

export default Error404
