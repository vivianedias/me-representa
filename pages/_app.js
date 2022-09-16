import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react"
import { SWRConfig } from "swr";
import Header from '../shared/ui/Header/Header'
import Footer from '../shared/ui/Footer/Footer'
import fetcher from "../utils/apiClient";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const options = {
    fetcher,
  };
  return (
    <SWRConfig value={options}>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider>
          <Header />
          <Flex
            flexDirection="column"
            width="100wh"
            minHeight="calc(100vh - 450px)"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
            as="main"
          >
            <Component {...pageProps} />
          </Flex>
          <Footer />
        </ChakraProvider>
      </SessionProvider>
    </SWRConfig>
  );
}

export default MyApp;
