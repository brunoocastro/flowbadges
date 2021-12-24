import { memo, useEffect, useState } from 'react'
import { ClassicModal } from '../../ClassicModal'

interface CopyCodeProps {
  item: string
  show: boolean
}

export const CopyCode = ({ item, show = false }: CopyCodeProps) => {
  const [state, setState] = useState(show)

  useEffect(() => {
    if (show) {
      setState(show)
    }
  }, [show])

  navigator.clipboard.writeText(item)

  return (
    <ClassicModal
      title="Código"
      body={`O código ${item} foi copiado.`}
      show={state}
      closeModal={() => setState(prevState => !prevState)}
    />
  )
}

// export default memo(CopyCode)
