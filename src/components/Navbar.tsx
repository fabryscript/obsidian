import { useContext } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { UserContext } from "../providers/AuthProvider";
import MenuLink from "./MenuLink";
import { signOut } from "firebase/auth";
import { auth } from "../logic/firebase";

export default function Navbar() {
  const user = useContext(UserContext);
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Text fontFamily={"monospace"} fontSize="2xl" color="purple.500">
              Obsidian
            </Text>
            {/* <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack> */}
          </HStack>
          <Text
            fontSize={"xl"}
            bgGradient="linear(to-r, purple.400, purple.200)"
            bgClip={"text"}
          >
            {user?.displayName}
          </Text>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={user?.photoURL || "U"} />
              </MenuButton>
              <MenuList bg="#252525">
                <MenuLink onClick={() => signOut(auth)}>Logout</MenuLink>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
