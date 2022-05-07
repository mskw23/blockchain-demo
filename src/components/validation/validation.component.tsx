import { Button, Flex, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import {
  blockchainActions,
  selectInvalidNodeId,
  selectNodes,
} from "../../features/blockchain";
import { getHeadHashes } from "../../features/blockchain/blockchain.helpers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export function ValidationComponent() {
  const nodes = useAppSelector(selectNodes);
  const invalidNodeId = useAppSelector(selectInvalidNodeId);
  const dispatch = useAppDispatch();
  const [msg, setMsg] = useState("");

  const validateArr = (arr: string[]) => {
    let invalidValue: number | null = null;
    arr.forEach((a) => {
      const index = arr.indexOf(a);
      if (index === arr.lastIndexOf(a)) {
        invalidValue = index;
        return;
      }
    });
    return invalidValue;
  };

  useEffect(() => {
    if (invalidNodeId === null) {
      setMsg("");
    } else {
      setMsg(`Node ${invalidNodeId} is invalid.`);
    }
  }, [invalidNodeId]);

  const validate = useCallback(() => {
    const values = getHeadHashes(nodes);
    const hashes = values.map((v) => v.hash);
    const nodeIds = values.map((v) => v.nodeId);
    const invalidValue = validateArr(hashes);
    if (invalidValue !== null) {
      const validNodes = nodes.filter((n) => n.nodeId! - nodeIds[invalidValue]);
      dispatch(blockchainActions.setInvalidNodeId(nodeIds[invalidValue]));
      setTimeout(() => {
        dispatch(blockchainActions.setInvalidNodeId(null));
        dispatch(
          blockchainActions.resetNode({
            invalid: nodeIds[invalidValue],
            node: validNodes[0],
          })
        );
      }, 2000);
    } else {
      setMsg(`All good.`);
      setTimeout(() => {
        setMsg("");
      }, 2000);
    }
  }, [nodes, dispatch]);

  return (
    <Flex pt="4" justifyContent="space-between">
      <Button colorScheme="blue" h="1.75rem" size="lg" onClick={validate}>
        Validate
      </Button>
      <Text>{msg}</Text>
    </Flex>
  );
}
