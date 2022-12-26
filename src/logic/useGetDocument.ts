import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { OBDocument } from "../models";
import { getDocRef } from "./documentLogic";

export const useGetDocument = (docID: string, uid: string) => {
  const [docData, setDocData] = useState<OBDocument>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const ref = getDocRef(docID, uid);
    const getter = getDoc(ref);
    getter
      .then((snap) => {
        setDocData(snap.data() as OBDocument);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [])

  return { docData, loading, error };
};
