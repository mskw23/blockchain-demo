import {
  AspectRatio,
  Box,
  useColorMode,
  useColorModePreference,
  useColorModeValue,
} from "@chakra-ui/react";
import { selectInvalidNodeId } from "../../../features/blockchain";
import { useAppSelector } from "../../../redux/hooks";

type NodeComponentProps = {
  nodeId: number;
  picked?: boolean;
  onPick(nodeId: number): void;
};

export function NodeComponent({ nodeId, picked, onPick }: NodeComponentProps) {
  const invalidNodeId = useAppSelector(selectInvalidNodeId);
  const { colorMode } = useColorMode();
  return (
    <AspectRatio flex="1" ratio={1}>
      <Box
        as="button"
        onClick={() => onPick(nodeId)}
        fontWeight="bold"
        color={
          nodeId === invalidNodeId
            ? "black"
            : picked
            ? colorMode === "dark"
              ? "black"
              : "white"
            : "inherit"
        }
        bgColor={
          nodeId === invalidNodeId
            ? "red.300"
            : picked
            ? colorMode === "dark"
              ? "blue.300"
              : "blue.500"
            : "inherit"
        }
        borderColor={
          nodeId === invalidNodeId ? "red.500" : picked ? "inherit" : "blue.500"
        }
        borderWidth={2}
        borderRadius={10}>
        NODE {nodeId}
      </Box>
    </AspectRatio>
  );
}
