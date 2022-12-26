import { VStack, Text, Button } from "@chakra-ui/react";
import { ReactElement } from "react";
import "./action.css";

interface Props {
  actionName: string;
  description: string;
  icon: ReactElement;
  action: () => void
}

function Action({ actionName, description, action, icon }: Props) {
  return (
    <Button
      variant={"outline"}
      h="250px"
      w="250px"
      className="action"
      onClick={action}
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
