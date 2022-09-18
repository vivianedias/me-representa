import { SessionProvider } from "next-auth/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Header from "../shared/ui/Header/Header";
import Footer from "../shared/ui/Footer/Footer";

import "../styles/globals.css";

const theme = {
  colors: {
    yellow: {
      500: "#ECC94B",
      600: "#ECC94B",
    },
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={extendTheme(theme)}>
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
  );
}

export default MyApp;
