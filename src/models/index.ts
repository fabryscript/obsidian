import { Timestamp } from "firebase/firestore"

export interface OBUser {
  name: string,
  email: string
  files: string[] // hash[]
}

export interface OBDocument {
  id: string,
  content: string,
  title: string,
  authorizedUsers: string[],
  lastModified: Timestamp
}