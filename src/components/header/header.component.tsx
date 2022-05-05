import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorMode,
  useTheme,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import { Breadcrumb } from "../breadcrumb";

export function HeaderComponent() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colors } = useTheme();

  return (
    <Container
      position="fixed"
      zIndex={2}
      bgColor={colorMode === "dark" ? "gray.800" : "whiteAlpha.900"}
      as="header"
      borderBottomWidth={1}
      borderColor={colorMode === "dark" ? "whiteAlpha.300" : "gray.200"}
      minW="100%">
      <Flex justifyContent="space-between" alignItems="center" paddingY="4">
        <Flex flex="0.3">
          <Text pointerEvents="none" fontWeight="bold">
            Smart Contracts Demo
          </Text>
        </Flex>
        <Flex flex="0.3" justifyContent="center">
          <Breadcrumb />
        </Flex>
        <Flex flex="0.3" justifyContent="flex-end">
          <Button
            size="sm"
            colorScheme="blue"
            variant="ghost"
            onClick={toggleColorMode}>
            {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
