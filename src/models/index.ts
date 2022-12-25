export interface OBUser {
  name: string,
  email: string
  files: string[] // hash[]
}

export interface OBDocument {
  id: string,
  content: string,
  authorizedUsers: string[]
}