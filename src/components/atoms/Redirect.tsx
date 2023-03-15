import { memo } from 'react'
import { Navigate } from 'react-router-dom'

const _Redirect = (): React.ReactElement => {
  return <Navigate to='/' replace />
}

const Redirect = memo(_Redirect)
export default Redirect
