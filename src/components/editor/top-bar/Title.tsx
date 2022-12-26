import {
  Popover,
  PopoverTrigger,
  Heading,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Input,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { UseFormRegister } from "react-hook-form"

export interface TitleProps {
  title: string;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  register: UseFormRegister<{
    title: string;
  }>;
}

function Title({ onSubmit, title, register }: TitleProps) {
  return (
    <Popover>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Heading fontSize={"xl"} textAlign={"center"}>
              {title}
            </Heading>
          </PopoverTrigger>
          <PopoverContent bg={"#252525"}>
            <PopoverArrow bg={"#252525"} />
            <PopoverCloseButton />
            <PopoverHeader>Edit name</PopoverHeader>
            <PopoverBody p="5%">
              <form onSubmit={onSubmit}>
                <Input {...register("title")} placeholder={title} />
                <HStack mt="3%">
                  <Button
                    type="submit"
                    leftIcon={<AiOutlineCheck />}
                    variant="ghost"
                    colorScheme={"green"}
                    w="full"
                    onClick={() => onClose()}
                  >
                    Done
                  </Button>
                </HStack>
              </form>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}

export default Title;
