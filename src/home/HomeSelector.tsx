import {
  Box,
  HStack,
  Spinner,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import Action from "../components/action/Action";
import DamnUOnMobile from "../components/DamnUOnMobile";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import { useGetUserDocuments } from "../logic/useGetUserDocuments";
import { UserContext } from "../providers/AuthProvider";
import File from "./File";
import { OBDocument } from "../models";
import { createNewEmptyDocument } from "../logic/documentLogic";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { setColorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const user = useContext(UserContext)
  const { data, error, loading } = useGetUserDocuments(user?.uid!)
  const docs = data as OBDocument[]

  const [creationLoading, setCreationLoading] = useState(false)

  useEffect(() => {
    setColorMode("dark");
  }, []);

  if (isMobile) return <DamnUOnMobile />;

  return (
    <Box>
      <Navbar />
      <Hero />
      <HStack spacing={5} p="5%">
        {loading && <Spinner />}
        {error && <Text>Error! {error.message}</Text>}
        {docs && docs.map((doc) => {
          return <File key={doc.id} {...doc} />
        })}
        <Action
          icon={<AiOutlineFileAdd size={100} />}
          actionName="Create new"
          description="Create a new document"
          action={async () => {
            setCreationLoading(true)
            const newDocID = await createNewEmptyDocument(user?.uid!)
            setCreationLoading(false)
            console.log(newDocID)
          }}
        />
      </HStack>
    </Box>
  );
}

export default App;
