import { getRedirectResult } from 'firebase/auth'
import { useEffect } from 'react'
import HomeSelector from '../home/HomeSelector'
import { auth } from '../logic/firebase'
import { createDbUser } from '../logic/auth';

function AuthViewDispatcher() {
  useEffect(() => {
    getResult()
  })

  async function getResult (){
    const result = await getRedirectResult(auth)
    if (result) {
      createDbUser(result.user)
    }
  }
  return <HomeSelector />
}

export default AuthViewDispatcher