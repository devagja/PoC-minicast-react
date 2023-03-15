import { Outlet } from 'react-router-dom'

import Topbar from '~/components/organisms/Topbar'

function Layout(): React.ReactElement {
  return (
    <div className='flex h-full w-full flex-col'>
      <Topbar />
      <Outlet />
    </div>
  )
}

export default Layout
