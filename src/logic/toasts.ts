import { createStandaloneToast, UseToastOptions } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

const produceToast = ({
  title,
  status,
  description,
}: {
  title: string;
  status: UseToastOptions["status"];
  description?: string;
}) => {
  return toast({
    title,
    status,
    description,
    variant: "left-accent",
    duration: 5000,
    isClosable: true,
  });
};

export const documentSaved = () =>
  produceToast({
    title: "Document saved successfully",
    status: "success",
  });

export const newDocumentCreated = () =>
  produceToast({
    title: "New document created successfully",
    status: "success"
  });

export const documentDeleted = () =>
  produceToast({
    title: "Document deleted successfully",
    status: "info"
  });

export const genericErrorOccurred = (err?: string) =>
  produceToast({
    title: "Dang! Error occurred!",
    status: "error",
    description: err
  });
