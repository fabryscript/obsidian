import { Stack, Heading, Text } from '@chakra-ui/react'

function Hero() {
  return (
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
  )
}

export default Hero