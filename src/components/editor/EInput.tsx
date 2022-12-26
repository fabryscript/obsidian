import { IconButton, Textarea } from "@chakra-ui/react";
import { AiOutlineSave } from "react-icons/ai";
import { Fab } from "react-tiny-fab";
import { useForm } from "react-hook-form";
import { updateDocumentContent } from "../../logic/documentLogic";

interface Props {
  content: string;
  docID: string;
  uid: string;
}

function EInput({ content, docID, uid }: Props) {
  const { register, handleSubmit } = useForm<{ content: string }>();

  const onSubmit = handleSubmit((d) =>
    updateDocumentContent(docID, uid, d.content)
  );
  return (
    <>
      <form onSubmit={onSubmit}>
        <Textarea
          {...register("content")}
          h="900px"
          border={"0px"}
          focusBorderColor={"#141414"}
          fontFamily="monospace"
          fontSize={"2xl"}
          mt="2%"
          autoFocus
          placeholder={"Nel mezzo del cammin di nostra vita..."}
          defaultValue={content} // <-- CHE BELLA STA ROBA GRAZIE DOCS!
        />
        <Fab
          event="click"
          mainButtonStyles={{
            backgroundColor: "#252525",
          }}
          alwaysShowTitle
          icon={
            <IconButton
              as="div"
              variant={"ghost"}
              w="full"
              h="full"
              rounded="full"
              aria-label="Save"
              type="submit"
              onClick={() => onSubmit()}
            >
              <AiOutlineSave />
            </IconButton>
          }
        />
      </form>
    </>
  );
}

export default EInput;
