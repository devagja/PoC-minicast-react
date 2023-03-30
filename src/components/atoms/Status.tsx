import { memo, useMemo } from 'react'

interface StatusProps {
  state: 'loading' | string
}
const Status = memo(function _({ state }: StatusProps): React.ReactElement {
  return (
    <div className='fixed bottom-0 right-0 z-10 sm:top-0 sm:bottom-auto'>
      {state !== 'loading' ? (
        <span className='btn-ghost  btn-square btn'> ✅</span>
      ) : (
        <span className='loading btn-ghost  btn-square btn'></span>
      )}
    </div>
  )
})

export default Status
