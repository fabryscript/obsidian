import { User } from "firebase/auth"
import { collection, doc, getDoc, setDoc } from "firebase/firestore"
import { firestore } from "./firebase"

export const checkIfUsersExists = async (uid: string) => {
  const ref = doc(firestore, "users", uid)
  const snap = await getDoc(ref)
  if(snap.exists()) return true
  else return false
}

export const createDbUser = async (user: User) => {
  const userExists = await checkIfUsersExists(user.uid)
  if(!userExists) {
    const usersRef = collection(firestore, "users")
    await setDoc(doc(usersRef, user.uid), {
      name: user.displayName,
      email: user.email,
      files: []
    })
  }
}