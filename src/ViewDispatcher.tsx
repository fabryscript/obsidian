import { useContext } from 'react'
import AuthViewDispatcher from './auth/AuthViewDispatcher'
import AuthLanding from './auth/AuthLanding'
import { UserContext } from './providers/AuthProvider'

function ViewDispatcher() {
  const user = useContext(UserContext)
  return (
    <>
      {user ? <AuthViewDispatcher /> : <AuthLanding />}
    </>
  )
}

export default ViewDispatcher