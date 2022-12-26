import { User } from "firebase/auth"
import { addDoc, collection, doc, getDoc, setDoc, Timestamp, updateDoc } from "firebase/firestore"
import { firestore } from "./firebase"
import { nanoid } from "nanoid"
import { OBDocument } from "../models"

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
    const userDoc = doc(usersRef, user.uid)
    await setDoc(userDoc, {
      name: user.displayName,
      email: user.email
    })

    const newDocID = nanoid(16)
    const userDocsRef = doc(collection(firestore, "users", user.uid, "docs"), newDocID)
    const defaultDocument: OBDocument = {
      authorizedUsers: [user.uid],
      content: "",
      id: newDocID,
      lastModified: Timestamp.now(),
      title: "My first document"
    }
    await setDoc(userDocsRef, defaultDocument)
  }
}
