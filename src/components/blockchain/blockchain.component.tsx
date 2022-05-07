import { ArrowUpIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { selectPickedNode } from "../../features/blockchain";
import { hashBlockchain } from "../../features/blockchain/blockchain.helpers";
import { Block as BlockType } from "../../features/blockchain/blockchain.types";
import { useAppSelector } from "../../redux/hooks";
import { getSHA256 } from "../../utils/functions";
import { Block } from "../block";

export function BlockchainComponent() {
  const node = useAppSelector(selectPickedNode);
  if (!node) {
    return <Text>Unable to find current node...</Text>;
  }
  const renderBlocks = () => {
    const arr = hashBlockchain(node);
    return arr.map((block: any, index: any) => (
      <Flex key={block.blockId} direction="column">
        <Block block={block} />
        {arr.length - 1 > index && (
          <Flex p="4" justifyContent="center">
            <ArrowUpIcon w="10" h="10" />
          </Flex>
        )}
      </Flex>
    ));
  };
  return (
    <Flex direction="column" pt="4">
      {renderBlocks()}
    </Flex>
  );
}
