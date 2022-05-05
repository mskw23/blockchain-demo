import { Container, Flex, Link, Text } from "@chakra-ui/react";
import { Blockchain } from "../blockchain";
import { Nodes } from "../nodes";
import { Validation } from "../validation";

export function DistributedComponent() {
  return (
    <Flex direction="column">
      <Text pb="2">
        Based on{" "}
        <Link
          target="_blank"
          color="pink.400"
          href="https://andersbrownworth.com/blockchain/">
          https://andersbrownworth.com/blockchain/
        </Link>{" "}
      </Text>
      <Nodes />
      <Validation />
      <Blockchain />
    </Flex>
  );
}
