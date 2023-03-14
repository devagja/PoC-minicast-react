import { memo } from 'react'
import { Navigate } from 'react-router-dom'

const Redirect = (): React.ReactElement => {
  return <Navigate to='/' replace />
}
export default memo(Redirect)
