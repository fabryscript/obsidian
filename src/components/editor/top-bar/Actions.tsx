import { HStack, Tooltip, IconButton } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineEye,
  AiOutlineCloudUpload,
  AiOutlineDownload,
} from "react-icons/ai";

function Actions() {
  return (
    <HStack>
      <Tooltip label="Immersion mode">
        <IconButton
          variant={"ghost"}
          aria-label="Immersion mode"
          icon={<AiOutlineEye />}
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
  );
}

export default Actions;
