import { Box, Flex } from "@chakra-ui/react";
import { Node } from "./node";

export function NodesComponent() {
  return (
    <Flex>
      <Node nodeId={1} picked />
      <Box w="2" />
      <Node nodeId={2} />
      <Box w="2" />
      <Node nodeId={3} />
    </Flex>
  );
}
