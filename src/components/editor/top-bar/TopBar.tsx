import { HStack, Button } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Actions from "./Actions";
import Title, { TitleProps } from "./Title";

function TopBar(props: TitleProps) {
  return (
    <HStack justify={"space-between"}>
      <Button
        as={Link}
        to="/"
        variant="ghost"
        leftIcon={<AiOutlineArrowLeft />}
      >
        Go Back
      </Button>
      <Title {...props} />
      <Actions />
    </HStack>
  );
}

export default TopBar;
