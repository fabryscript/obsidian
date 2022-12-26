import { Center, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SomeErrorOccurred() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 2000)
  }, [])
  return (
    <Center p="10%">
      <Heading>Uh-oh! Some error occurred!</Heading>
      <Text>You are going back home in 2 seconds!</Text>
    </Center>
  )
}

export default SomeErrorOccurred