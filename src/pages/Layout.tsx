import { type ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

import Topbar from '~/components/navigation/Topbar'

function Layout(): ReactElement {
  return (
    <div className='w-full h-full flex flex-col '>
      <Topbar />
      <Outlet />
    </div>
  )
}

export default Layout
