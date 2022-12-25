import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { auth } from '../logic/firebase'

function DamnUOnMobile() {
  return (
    <Stack align={"center"}>
      <Heading textAlign={"center"} mt="10%">Hello! we see that you are on a mobile device but <Text as="span" fontFamily={"monospace"}>damn.</Text></Heading>
      <Text>Obsidian cannot be used on mobile devices for UI/UX reasons</Text>
      <Text>To comfort you, we have a cat!</Text>
      <Image rounded={"xl"} src="https://media.tenor.com/yybmSYAC6wsAAAAC/cat-funny-cat-memes.gif" />
      <Text>Also, if you want, you can logout by clicking here</Text>
      <Button onClick={() => signOut(auth)}>Logout</Button>
    </Stack>
  )
}

export default DamnUOnMobile