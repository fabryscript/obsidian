import { collection, deleteDoc, doc, setDoc, Timestamp, updateDoc } from "firebase/firestore"
import { OBDocument } from "../models"
import { firestore } from "./firebase"
import { documentDeleted, documentSaved, genericErrorOccurred, newDocumentCreated } from "./toasts"
import { nanoid } from "nanoid";

export const getDocRef = (docID: string, uid: string) => doc(firestore, "users", uid, "docs", docID)

export const modifyTitle = async (docID: string, uid: string, newTitle: string) => {
  const ref = getDocRef(docID, uid)
  await updateDoc(ref, { title: newTitle })
}

export const updateDocumentContent = async (docID: string, uid: string, newContent: string) => {
  const ref = getDocRef(docID, uid)
  await updateDoc(ref, { content: newContent, lastModified: Timestamp.now() })
    .then(() => documentSaved())
    .catch((e) => genericErrorOccurred(e))
}

export const createNewEmptyDocument = async (uid: string) => {
  const docID = nanoid(16)
  const emptyDocument: OBDocument = {
    authorizedUsers: [uid],
    content: "",
    id: docID,
    lastModified: Timestamp.now(),
    title: "Untitled"
  }
  const ref = doc(collection(firestore, "users", uid, "docs"), docID)
  await setDoc(ref, emptyDocument)
    .then(() => newDocumentCreated())
    .catch((e) => genericErrorOccurred(e))
  return docID
}

export const deleteDocument = async (uid: string, docID: string) => {
  const ref = getDocRef(docID, uid)
  await deleteDoc(ref)
    .then(() => documentDeleted())
    .catch((e) => genericErrorOccurred(e))
}