import { Navigate } from 'react-router-dom'
import Editor from '../components/editor/Editor'

function EditExistingFile() {
  const id = new URLSearchParams(window.location.search).get("id")
  if(id) {
    return <Editor id={id} />
  } else {
    return <Navigate to={"/"} />
  }
}

export default EditExistingFile