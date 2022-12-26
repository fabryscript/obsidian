import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import "./action.css";

interface Props {
  actionName: string;
  description: string;
  to: string;
  icon: ReactElement;
}

function Action({ actionName, description, to, icon }: Props) {
  const navigate = useNavigate();

  return (
    <Button
      variant={"outline"}
      h="250px"
      w="250px"
      className="action"
      onClick={() => navigate(to)}
      borderWidth={"2px"}
      rounded="2xl"
      p="10%"
    >
      <VStack spacing={2} opacity={0.45}>
        {icon}
        <Text fontWeight={600} fontSize={"xl"}>
          {actionName}
        </Text>
        <Text fontSize={"sm"}>{description}</Text>
      </VStack>
    </Button>
  );
}

export default Action;
