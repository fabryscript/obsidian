import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { OBDocument } from "../models";
import { format } from "date-fns";

function File({
  authorizedUsers,
  content,
  id,
  title,
  lastModified,
}: OBDocument) {
  const navigate = useNavigate();
  return (
    <Card
      textAlign={"center"}
      bg={"#252525"}
      minH="250px"
      minW="250px"
      rounded={"2xl"}
    >
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{content.substring(0, 20)}...</Text>
      </CardBody>
      <CardFooter>
        <VStack>
          <Text fontSize={"xx-small"}>
            Last modified: {format(lastModified.toDate(), "dd/MM/YYY hh:mm:ss")}
          </Text>
          <HStack>
            <Button
              onClick={() => navigate(`/edit?id=${id}`)}
              leftIcon={<AiOutlineEye />}
            >
              Open
            </Button>
            <Button leftIcon={<AiOutlineDelete />}>Delete</Button>
          </HStack>
        </VStack>
      </CardFooter>
    </Card>
  );
}

export default File;
