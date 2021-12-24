/* eslint-disable camelcase */
import Image from 'next/image'
import { off } from 'process'
import { useCallback, useEffect, useState } from 'react'
import { BadgesResponse } from '../../types'
import { CopyCode } from '../common/CopyToClipboard'

export const LargeCard = ({ badges }: BadgesResponse) => {
  const [show, setShow] = useState(false)
  const [thisBadge, setThisBadge] = useState('')
  const [selected, setSelected] = useState(false)

  const toggle = useCallback(
    code => {
      if (thisBadge === code) {
        setSelected(true)
      }
    },
    [thisBadge]
  )

  console.log(thisBadge)
  // useEffect(() => {
  //   if (thisBadge) {
  //     setThisBadge('')
  //   }
  // }, [thisBadge])

  return (
    <>
      <CopyCode item={thisBadge} show={selected} />
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
                  src={badge.src}
                  width="100"
                  height="100"
                  layout="responsive"
                  objectFit="cover"
                  alt={badge.name}
                  className="absolute rounded-md cursor-pointer"
                />
              </div>
              <div className="col-span-2">
                <div className="body flex flex-col justify-between h-full">
                  <div className="tags grid grid-cols-1 md:grid-cols-4 gap-y-16 md:gap-16">
                    <span
                      className={`w-100 py-4 flex items-center justify-center rounded-md ${
                        position === '1º'
                          ? 'bg-yellow-400 text-yellow-800'
                          : position === '2º'
                          ? 'text-white bg-slate-600'
                          : position === '3º'
                          ? 'text-brown-100 bg-brown-800'
                          : 'text-slate-300'
                      }`}
                    >
                      {position}
                    </span>
                    <button
                      className="rounded-md overflow-hidden bg-slate-600 hover:bg-slate-700 border-yellow-50 col-span-3 grid grid-cols-4"
                      onClick={() => {
                        setThisBadge(badge.code)
                        toggle(badge.code)
                      }}
                    >
                      <div className="bg-slate-50 text-slate-600 w-full h-full py-[12px] flex justify-center items-center">
                        +
                      </div>
                      <span className="col-span-3 align-middle m-auto text-xs w-100 ">
                        #{badge.code}
                      </span>
                    </button>
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