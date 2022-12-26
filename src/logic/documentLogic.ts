import { doc, updateDoc } from "firebase/firestore"
import { firestore } from "./firebase"
import { documentSaved } from "./toasts"

export const getDocRef = (docID: string, uid: string) => doc(firestore, "users", uid, "docs", docID)

export const modifyTitle = async (docID: string, uid: string, newTitle: string) => {
  const ref = getDocRef(docID, uid)
  await updateDoc(ref, { title: newTitle })
}

export const updateDocumentContent = async (docID: string, uid: string, newContent: string) => {
  const ref = getDocRef(docID, uid)
  await updateDoc(ref, { content: newContent })
    .then(() => documentSaved())
}