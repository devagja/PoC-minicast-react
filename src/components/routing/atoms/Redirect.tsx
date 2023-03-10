import { type ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

const Redirect = (): ReactElement => {
  return <Navigate to='/' replace />
}
export default Redirect
