import { ReactElement } from 'react'
import { CopyIcon } from '@radix-ui/react-icons'
import { toast } from 'react-hot-toast'

interface CopyBadgeCodeProps {
  code: string
}

const CopyBadgeCode = (props: CopyBadgeCodeProps): ReactElement => {
  const { code } = props

  return (
    <>
      <button
        className="rounded-md overflow-hidden bg-slate-600 hover:bg-slate-700 hover:stroke-yellow-500
        transition-all duration-75 border-yellow-50 col-span-3 grid grid-cols-4 border-2"
        onClick={() => {
          navigator.clipboard.writeText(code)
          toast.success(`O código "${code}" foi copiado!`)
        }}
      >
        <div className="bg-slate-50 text-slate-600 w-full h-full py-[12px] flex justify-center items-center">
          <CopyIcon />
        </div>
        <span className="col-span-3 align-middle m-auto text-xs w-100 ">
          #{code}
        </span>
      </button>
    </>
  )
}

export default CopyBadgeCode
