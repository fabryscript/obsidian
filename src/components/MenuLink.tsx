import { Button, MenuItem } from "@chakra-ui/react";
import { ReactNode } from "react";

function MenuLink({ children, onClick }: { children: ReactNode, onClick: () => void }) {
  return <Button onClick={onClick} w="full" rounded={"0"}>{children}</Button>;
}

export default MenuLink;
