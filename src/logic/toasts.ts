import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast()

export const documentSaved = () => toast({
  title: "Document saved successfully",
  status: "success",
  variant: "left-accent",
  duration: 5000,
  isClosable: true
})