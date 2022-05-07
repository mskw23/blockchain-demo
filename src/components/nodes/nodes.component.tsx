import { Box, Flex } from "@chakra-ui/react";
import { Fragment } from "react";
import {
  blockchainActions,
  selectNodes,
  selectPickedNodeId,
} from "../../features/blockchain";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Node } from "./node";

export function NodesComponent() {
  const dispatch = useAppDispatch();
  const nodes = useAppSelector(selectNodes);
  const pickedNodeId = useAppSelector(selectPickedNodeId);
  const handlePick = (nodeId: number) => {
    dispatch(blockchainActions.pickNode(nodeId));
  };
  return (
    <Flex>
      {nodes.map((node, index) => (
        <Fragment key={node.nodeId}>
          <Node
            nodeId={node.nodeId}
            onPick={handlePick}
            picked={node.nodeId === pickedNodeId}
          />
          {nodes.length - 1 > index && <Box w="2" />}
        </Fragment>
      ))}
    </Flex>
  );
}
