import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { AiFillGoogleCircle } from "react-icons/ai";
import { auth } from "../logic/firebase";

export default function AuthLanding() {
  const provider = new GoogleAuthProvider()
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"space-evenly"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              bgGradient="linear(to-r, purple.600, purple.400)"
              bgClip="text"
            >
              Obsidian
            </Text>
            <br /> <Text as={"span"}>Text Editor</Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            The fast, lightweight and cloud-based <u>free</u> md/text editor
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              w="75%"
              bg={"purple.400"}
              color={"white"}
              _hover={{
                bg: "purple.500",
              }}
              leftIcon={<AiFillGoogleCircle />}
              onClick={async () => await signInWithRedirect(auth, provider)}
            >
              Login with Google
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.pexels.com/photos/938165/pexels-photo-938165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        />
      </Flex>
    </Stack>
  );
}
