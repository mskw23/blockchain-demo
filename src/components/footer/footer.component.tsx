import { Container, Flex, Icon } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
export function FooterComponent() {
  return (
    <Flex as="footer" height="28" alignItems="center" justifyContent="center">
      <Icon as={AiFillGithub} w={10} h={10} />
    </Flex>
  );
}
