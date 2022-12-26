import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlineEye, AiOutlineSave } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { OBDocument } from "../models";
import { format } from "date-fns";
import { deleteDocument } from "../logic/documentLogic";
import { useContext } from "react";
import { UserContext } from "../providers/AuthProvider";

function File({
  authorizedUsers,
  content,
  id,
  title,
  lastModified,
}: OBDocument) {
  const user = useContext(UserContext);
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
            <Popover>
              {({ onClose }) => (
                <>
                  <PopoverTrigger>
                    <Button leftIcon={<AiOutlineDelete />}>Delete</Button>
                  </PopoverTrigger>
                  <PopoverContent bg={"#252525"}>
                    <PopoverArrow bg={"#252525"} />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation</PopoverHeader>
                    <PopoverBody>
                      Are you sure you want to delete this file? This action is
                      irreversible.
                    </PopoverBody>
                    <PopoverFooter>
                      <HStack justify={"center"}>
                        <Button
                          w="full"
                          colorScheme={"red"}
                          onClick={() => deleteDocument(user?.uid!, id)}
                          leftIcon={<AiOutlineDelete />}
                        >
                          Delete
                        </Button>
                        <Button
                          w="full"
                          variant="outline"
                          onClick={onClose}
                          leftIcon={<AiOutlineSave />}
                        >
                          Keep
                        </Button>
                      </HStack>
                    </PopoverFooter>
                  </PopoverContent>
                </>
              )}
            </Popover>
          </HStack>
        </VStack>
      </CardFooter>
    </Card>
  );
}

export default File;
