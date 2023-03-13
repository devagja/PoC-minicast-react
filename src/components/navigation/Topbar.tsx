import { memo, type ReactElement } from 'react'
import { Link } from 'react-router-dom'

function Topbar(): ReactElement {
  return (
    <div className='container mx-auto navbar bg-base-100'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          MiniCast
        </Link>
      </div>
      <div className='flex-none'>
        <span className='btn btn-square  btn-ghost loading'></span>
      </div>
    </div>
  )
}

export default memo(Topbar)
