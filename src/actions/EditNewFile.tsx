import { useContext, useEffect, useState } from 'react'
import Editor from '../components/editor/Editor'
import { createNewEmptyDocument } from '../logic/documentLogic'
import { UserContext } from '../providers/AuthProvider'

function EditNewFile() {
  const user = useContext(UserContext)
  const [newDocID, setNewDocID] = useState("")
  useEffect(() => {
    createNewEmptyDocument(user?.uid!)
  }, [])

  return <Editor id={""} />
}

export default EditNewFile