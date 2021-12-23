/* eslint-disable camelcase */
import Image from 'next/image'

interface ModalProps {
  badge: {
    name: string
    code: string
    src: string
    high: string
    description: string
    created_at: string
    hq: boolean
    updated_at: string
    starts_on: string
    creator_profile_id: string
    status: boolean
    expires_at: string
    count: number
    badge_id: string
    percentage_badge: number
  }
}

const BaseModal = (props: ModalProps) => {
  return (
    <div
      className="absolute z-100 w-2/4 h-auto max-h-[600px] bg-base-gray
                bg-opacity-90 m-auto left-0 right-0 top-0 bottom-0
                text-base-white"
    >
      <main className="h-screen w-screen flex-col ">
        <div>
          <Image
            src={props.badge.src}
            width="100%"
            height="100%"
            alt={props.badge.name}
            onClick={() =>
              window.open(props.badge.high || props.badge.src, '_blank')
            }
          />
          <div className="flex flex-col">
            <h1>{props.badge.name}</h1>
            <h1>{props.badge.code}</h1>
            <h1>{props.badge.name}</h1>
          </div>
        </div>
        <h1 className="text-base-white">MODAL</h1>
      </main>
    </div>
  )
}

export default BaseModal
