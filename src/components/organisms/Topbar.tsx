import { memo, useMemo } from 'react'
import { useNavigation, Link } from 'react-router-dom'
import Status from '../atoms/Status'

const Topbar = memo(function _(): React.ReactElement {
  const navigation = useNavigation()

  const PageStatusMemo = useMemo(
    () => <Status state={navigation.state} />,
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
})

export default Topbar
