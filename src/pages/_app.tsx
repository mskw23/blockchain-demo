import { ChakraProvider, Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Header } from "../components/header";
import { initWorker } from "../utils/functions";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initWorker();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container pt="20">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
