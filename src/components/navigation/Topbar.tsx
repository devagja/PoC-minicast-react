import { memo, useMemo } from 'react'
import { useNavigation, Link } from 'react-router-dom'

function Topbar(): React.ReactElement {
  const navigation = useNavigation()

  const PageStatusMemo = useMemo(
    () => (
      <div className='fixed bottom-0 right-0 z-10 sm:top-0 sm:bottom-auto'>
        {navigation.state !== 'loading' ? (
          <span className='btn-ghost  btn-square btn'> ✅</span>
        ) : (
          <span className='loading btn-ghost  btn-square btn'></span>
        )}
      </div>
    ),
    [navigation.state]
  )

  return (
    <div className='container navbar mx-auto bg-base-100'>
      <div className='flex-1'>
        <Link to='/' className='btn-ghost btn text-xl normal-case'>
          MiniCast
        </Link>
      </div>
      {PageStatusMemo}
    </div>
  )
}

export default memo(Topbar)
