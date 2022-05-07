import { Container, Flex, Icon } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
export function FooterComponent() {
  return (
    <Flex as="footer" height="28" alignItems="center" justifyContent="center">
      <a
        href="https://github.com/mskw23/blockchain-demo"
        target="_blank"
        rel="noreferrer">
        <Icon as={AiFillGithub} w={10} h={10} />
      </a>
    </Flex>
  );
}
