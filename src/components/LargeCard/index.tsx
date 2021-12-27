/* eslint-disable camelcase */
import Image from 'next/image'
import CopyBadgeCode from '../../patterns/CopyBadgeCode'
import { BadgesResponse } from '../../types'

export const LargeCard = ({ badges }: BadgesResponse) => {
  return (
    <>
      {badges
        .filter((_, i) => i >= 0 && i < 3)
        .map((badge, index) => {
          const position = `${index + 1}º`
          return (
            <section
              key={badge.code}
              className="p-16 col-span-3 grid grid-cols-1 gap-y-[16px] bg-slate-800 rounded-md"
            >
              <div className="bg-yellow-300 hover:opacity-75 w-full rounded-md cursor-pointe relative">
                <Image
                  src={badge.high || badge.src}
                  width="100"
                  height="100"
                  layout="responsive"
                  objectFit="cover"
                  alt={badge.name}
                  className="absolute rounded-md cursor-pointer"
                  onClick={() => window.open(badge.high || badge.src, '_blank')}
                />
              </div>
              <div className="col-span-2">
                <div className="body flex flex-col justify-between h-full">
                  <div className="tags grid grid-cols-1 md:grid-cols-4 gap-y-16 md:gap-16">
                    <span
                      className={`w-100 py-4 flex items-center justify-center rounded-md ${
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
                  <div className="infos flex flex-col justify-center text-xs text-slate-400 mt-16">
                    <p className="mb-8">
                      <span className="text-slate-300">Nome: </span>
                      {badge.name}
                    </p>
                    <p>
                      <span className="text-slate-300">Resgates: </span>
                      {badge.count}
                    </p>
                  </div>
                  <div className="text-sm p-16 mt-16 text-center italic">
                    &#8220;{badge.description}
                    &#8221;
                  </div>
                </div>
              </div>
            </section>
          )
        })}
    </>
  )
}
