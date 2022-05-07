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
      zIndex={10}
      bgColor={colorMode === "dark" ? "gray.800" : "whiteAlpha.900"}
      as="header"
      borderBottomWidth={1}
      borderColor={colorMode === "dark" ? "whiteAlpha.300" : "gray.200"}
      minW="100%">
      <Flex justifyContent="space-between" alignItems="center" paddingY="4">
        <Text pointerEvents="none" fontWeight="bold">
          Blockchain Demo
        </Text>
        <Button
          size="sm"
          colorScheme="blue"
          variant="ghost"
          onClick={toggleColorMode}>
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </Flex>
    </Container>
  );
}
