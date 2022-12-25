import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineFileAdd, AiOutlineFolderOpen } from "react-icons/ai";
import Action from "./components/action/Action";
import DamnUOnMobile from "./components/DamnUOnMobile";
import Navbar from "./components/Navbar";

function App() {
  const { setColorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    setColorMode("dark");
  }, []);

  if (isMobile) return <DamnUOnMobile />;

  return (
    <Box>
      <Navbar />
      <Stack mt="5%" textAlign={"center"} direction={"column"}>
        <Heading
          lineHeight={1.1}
          fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          marginLeft={{ base: "0", md: "10" }}
        >
          Welcome to{" "}
          <Text
            as={"span"}
            bgGradient="linear(to-r, purple.600, purple.400)"
            bgClip="text"
          >
            Obsidian
          </Text>
        </Heading>
        <Text opacity={0.7}>Create a new file or browse your recent files</Text>
      </Stack>

      <HStack spacing={5} justify={"center"} mt="5%">
        <Action
          icon={<AiOutlineFileAdd size={100} />}
          actionName="Create new"
          description="Create a new MarkDown file"
          to="/edit"
        />
        <Action
          icon={<AiOutlineFolderOpen size={100} />}
          actionName="Browse"
          description="Browse your recent files"
          to="/browse"
        />
      </HStack>
    </Box>
  );
}

export default App;
