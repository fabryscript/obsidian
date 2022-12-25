import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineCloudUpload,
  AiOutlineDownload,
  AiOutlineEye,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Editor() {
  const [fileName, setFileName] = useState("Untitled");
  const [documentBody, setDocumentBody] = useState("");
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      e.key === "";
    });
  });

  return (
    <Box p="2%">
      <HStack justify={"space-between"}>
        <Button
          as={Link}
          to="/"
          variant="ghost"
          leftIcon={<AiOutlineArrowLeft />}
        >
          Go Back
        </Button>
        <Popover>
          <PopoverTrigger>
            <Heading fontSize={"xl"} textAlign={"center"}>
              {fileName}
            </Heading>
          </PopoverTrigger>
          <PopoverContent bg={"#252525"}>
            <PopoverArrow bg={"#252525"} />
            <PopoverCloseButton />
            <PopoverHeader>Edit name</PopoverHeader>
            <PopoverBody p="5%">
              <Input
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <HStack>
          <Tooltip label="Immersion mode">
            <IconButton
              variant={"ghost"}
              aria-label="Immersion mode"
              icon={<AiOutlineEye />}
            />
          </Tooltip>
          <Tooltip label="Save to cloud">
            <IconButton
              variant={"ghost"}
              aria-label="Save to cloud"
              icon={<AiOutlineCloudUpload />}
            />
          </Tooltip>
          <Tooltip label="Download File">
            <IconButton
              variant={"ghost"}
              aria-label="Download File"
              icon={<AiOutlineDownload />}
            />
          </Tooltip>
        </HStack>
      </HStack>
      
      <Textarea
        h="900px"
        border={"0px"}
        focusBorderColor={"#141414"}
        fontFamily="monospace"
        fontSize={"2xl"}
        mt="2%"
        autoFocus
        value={documentBody}
        onChange={(e) => setDocumentBody(e.target.value)}
        placeholder={"Nel mezzo del cammin di nostra vita..."}
      />
    </Box>
  );
}

export default Editor;
