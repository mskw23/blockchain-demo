import { AspectRatio, Box } from "@chakra-ui/react";

type NodeComponentProps = {
  nodeId: number;
  picked?: boolean;
};

export function NodeComponent({ nodeId, picked }: NodeComponentProps) {
  return (
    <AspectRatio flex="1" ratio={1}>
      <Box
        as="button"
        fontWeight="bold"
        color={picked ? "black" : "inherit"}
        bgColor={picked ? "blue.300" : "inherit"}
        borderColor={picked ? "inherit" : "blue.300"}
        borderWidth={2}
        borderRadius={10}>
        NODE {nodeId}
      </Box>
    </AspectRatio>
  );
}
