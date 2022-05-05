import { TimeIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

export function ValidationComponent() {
  return (
    <Flex pt="4" direction="column">
      <Text pb="2">Block time [s]</Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <TimeIcon color="gray.300" />
        </InputLeftElement>
        <Input placeholder="Block time" value={14} type="number" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm">
            Start
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}
