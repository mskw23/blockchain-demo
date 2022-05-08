import { ChakraProvider, Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { store } from "../redux/store";
import { initWorker } from "../utils/functions";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initWorker();
  }, []);
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Header />
        <Container paddingTop="20">
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
