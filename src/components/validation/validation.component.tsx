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
import { useCallback, useEffect, useRef, useState } from "react";

export function ValidationComponent() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [inProgress, setInProgress] = useState(false);
  const [blockTime, setBlockTime] = useState(14);

  const clearInt = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    () => {
      clearInt();
    };
  }, []);

  const handleValidation = useCallback(() => {
    if (intervalRef.current) {
      setInProgress(false);
      clearInt();
    } else {
      setInProgress(true);
      intervalRef.current = setInterval(handleTick, 1000);
    }
  }, []);

  const validate = useCallback(() => {
    // TODO: validate
    console.log("validate");
    setTimeout(() => {
      setBlockTime(14);
      handleValidation();
    }, 5000);
  }, [handleValidation]);

  useEffect(() => {
    if (blockTime === 0) {
      clearInt();
      validate();
    }
  }, [blockTime, validate]);

  const handleTick = () => {
    setBlockTime((v) => v - 1);
  };

  return (
    <Flex pt="4" direction="column">
      <Text pb="2">Block time [s]</Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <TimeIcon color="gray.300" />
        </InputLeftElement>
        <Input
          placeholder="Block time"
          _disabled={{ opacity: 1 }}
          value={blockTime}
          disabled={inProgress}
          onChange={(e) => setBlockTime(parseInt(e.target.value))}
          type="number"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleValidation}>
            {inProgress ? "Stop" : "Start"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}
