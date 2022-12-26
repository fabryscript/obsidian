import { Box } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/AuthProvider";
import Loading from "../Loading";
import SomeErrorOccurred from "../SomeErrorOccurred";
import { useForm } from "react-hook-form";
import { getDocRef, modifyTitle } from "../../logic/documentLogic";
import { useDocumentData } from "react-firebase-hooks/firestore";
import EInput from "./EInput";
import { OBDocument } from "../../models";
import { DocumentReference } from "firebase/firestore";
import TopBar from "./top-bar/TopBar";
interface Props {
  id: string;
}

function Editor({ id }: Props) {
  const user = useContext(UserContext);
  const [docData, loading, error] = useDocumentData<OBDocument>(
    getDocRef(id, user?.uid!) as DocumentReference<OBDocument>
  );

  useEffect(() => console.log("update triggered"));

  const { register, handleSubmit } = useForm<{ title: string }>();

  const onSubmit = handleSubmit((data) =>
    modifyTitle(docData?.id!, user?.uid!, data.title)
  );

  if (error) {
    return <SomeErrorOccurred />;
  }
  if (loading || !docData) {
    return <Loading />;
  }

  const titleProps = {
    title: docData.title,
    onSubmit,
    register,
  };

  return (
    <Box p="2%">
      <TopBar {...titleProps} />
      <EInput docID={id} uid={user?.uid!} content={docData.content} />
    </Box>
  );
}

export default Editor;
