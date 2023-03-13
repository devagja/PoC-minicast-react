import { memo, type ReactElement } from 'react'
import { Link } from 'react-router-dom'

function Topbar(): ReactElement {
  return (
    <div className='container navbar mx-auto bg-base-100'>
      <div className='flex-1'>
        <Link to='/' className='btn-ghost btn text-xl normal-case'>
          MiniCast
        </Link>
      </div>
      <div className='flex-none'>
        <span className='loading btn-ghost  btn-square btn'></span>
      </div>
    </div>
  )
}

export default memo(Topbar)
