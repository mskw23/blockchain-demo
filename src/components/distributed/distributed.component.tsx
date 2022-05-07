import { Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import { blockchainActions } from "../../features/blockchain";
import { useAppDispatch } from "../../redux/hooks";
import { Blockchain } from "../blockchain";
import { Nodes } from "../nodes";
import { Validation } from "../validation";

export function DistributedComponent() {
  const dispatch = useAppDispatch();
  const reset = () => {
    dispatch(blockchainActions.reset());
  };
  return (
    <Flex direction="column">
      <Flex pb="2" justifyContent="space-between" alignItems="center">
        <Text>
          Based on{" "}
          <Link
            target="_blank"
            color="pink.400"
            href="https://andersbrownworth.com/blockchain/">
            https://andersbrownworth.com/blockchain/
          </Link>{" "}
        </Text>
        <Button onClick={reset} colorScheme="blue" size="sm">
          Reset
        </Button>
      </Flex>
      <Nodes />
      <Validation />
      <Blockchain />
    </Flex>
  );
}
