import { ArrowUpIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Block } from "../block";
import { initialState } from "./blockchain.const";

export function BlockchainComponent() {
  const [state, setState] = useState(initialState);
  return (
    <Flex direction="column" pt="4">
      {state.map((block) => (
        <Flex key={block.blockId} direction="column">
          <Block block={block} />
          <Flex p="4" justifyContent="center">
            <ArrowUpIcon w="10" h="10" />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
