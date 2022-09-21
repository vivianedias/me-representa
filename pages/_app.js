import "@fontsource/roboto";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { SWRConfig } from "swr";
import Header from "../shared/ui/Header/Header";
import Footer from "../shared/ui/Footer/Footer";
import fetcher from "../utils/apiClient";
import "../styles/globals.css";
import ReactGA from 'react-ga';

const theme = {
  colors: {
    yellow: {
      500: "#ECC94B",
      600: "#ECC94B",
    },
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
};

const GA_TRACKING_ID = process.env.GA_TRACKING_ID || "4083645711" // remover essa id depois
ReactGA.initialize(GA_TRACKING_ID)

function MyApp({ Component, pageProps }) {
  const options = {
    fetcher,
  };
  return (
    <SWRConfig value={options}>
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
    </SWRConfig>
  );
}

export default MyApp;
