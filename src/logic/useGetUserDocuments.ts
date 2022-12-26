import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "./firebase";

export const useGetUserDocuments = (uid: string) => {
  const ref = collection(firestore, "users", uid, "docs")
  const [data, loading, error] = useCollectionData(ref)

  return { data, loading, error }
}