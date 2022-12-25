import { Center, Spinner } from '@chakra-ui/react'

function Loading() {
  return (
    <Center mt="25%">
      <Spinner size={"lg"} />
    </Center>
  )
}

export default Loading