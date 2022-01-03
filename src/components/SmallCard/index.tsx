import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { BadgeContext } from '../../pages/ranking'
import CopyBadgeCode from '../../patterns/CopyBadgeCode'

export const SmallCard = ({ badges }) => {
  const { searchText } = useContext(BadgeContext)

  const badgesToUse =
    searchText === ''
      ? badges.filter((_, i) => i !== 0 && i !== 1 && i !== 2)
      : badges

  return (
    <>
      {badgesToUse.map((badge, index) => {
        const position = searchText === '' ? `${index + 4}º` : `${index + 1}º`
        return (
          <Link key={badge.code} href={`/c/${badge.code}`} passHref>
            <a
              key={badge.code}
              className="p-2 col-span-4 grid grid-cols-3 gap-[16px] bg-base-background rounded-md"
            >
              <div className="">
                <Image
                  src={badge.high || badge.src}
                  width="100"
                  height="100"
                  layout="responsive"
                  objectFit="cover"
                  alt={badge.name}
                  onClick={() => window.open(badge.high || badge.src, '_blank')}
                  className="absolute rounded-md cursor-pointer bg-yellow-300 hover:opacity-75 w-full"
                />
              </div>
              <div className="col-span-2">
                <div className="body flex flex-col justify-between h-full">
                  <div className="tags grid grid-cols-4 gap-2">
                    <span className="w-100 py-2 flex items-center justify-center rounded-md text-slate-300">
                      {position}
                    </span>
                    <CopyBadgeCode code={badge.code} />
                  </div>
                  <div className="infos flex flex-col justify-center text-xs text-slate-400 mt-2">
                    <p className="mb-2">
                      <span className="text-slate-300">Nome: </span>
                      {badge.name}
                    </p>
                    <p>
                      <span className="text-slate-300">Resgates: </span>
                      {badge.count}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        )
      })}
    </>
  )
}
