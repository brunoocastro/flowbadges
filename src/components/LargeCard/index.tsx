/* eslint-disable camelcase */
import Image from 'next/image'
import Link from 'next/link'
import CopyBadgeCode from '../../patterns/CopyBadgeCode'

export const LargeCard = ({ badges }) => {
  return (
    <>
      {badges
        .filter((_, i) => i >= 0 && i < 3)
        .map((badge, index) => {
          const position = `${index + 1}º`
          return (
            <Link key={badge.code} href={`/c/${badge.code}`} passHref>
              <a className="p-4 col-span-3 gap-y-[16px] bg-base-background rounded-md">
                <div className="bg-yellow-300 hover:opacity-75 w-full h-fit mb-4 rounded-md cursor-pointe relative">
                  <Image
                    src={badge.high || badge.src}
                    width="100"
                    height="100"
                    layout="responsive"
                    objectFit="cover"
                    alt={badge.name}
                    className="absolute rounded-md cursor-pointer"
                    onClick={() =>
                      window.open(badge.high || badge.src, '_blank')
                    }
                  />
                </div>
                <div className="col-span-2">
                  <div className="body flex flex-col justify-between h-full">
                    <div className="tags grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-4">
                      <span
                        className={`w-100 py-1 flex items-center justify-center rounded-md ${
                          position === '1º'
                            ? 'bg-metal-gold text-yellow-800'
                            : position === '2º'
                            ? 'text-gray-700 bg-metal-iron'
                            : position === '3º'
                            ? 'text-brown-100 bg-metal-bronze'
                            : 'text-slate-300'
                        }`}
                      >
                        {position}
                      </span>
                      <CopyBadgeCode code={badge.code} />
                    </div>
                    <div className="infos flex flex-col justify-center text-xs text-slate-400 mt-4">
                      <p className="mb-2">
                        <span className="text-slate-300">Nome: </span>
                        {badge.name}
                      </p>
                      <p>
                        <span className="text-slate-300">Resgates: </span>
                        {badge.count}
                      </p>
                    </div>
                    <div className="text-sm p-4 mt-4 text-center italic">
                      &#8220;{badge.description}
                      &#8221;
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
