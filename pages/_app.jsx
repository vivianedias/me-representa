import "@fontsource/roboto";
export { reportWebVitals } from "next-axiom";
import { appWithTranslation } from "next-i18next";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

import Header from "../shared/ui/Header/Header";
import Footer from "../shared/ui/Footer/Footer";
import Analytics from "../shared/analytics";

import fetcher from "/utils/apiClient";

import "../styles/globals.css";

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

function MyApp({ Component, pageProps }) {
  const options = {
    fetcher,
  };

  return (
    <>
      <SWRConfig value={options}>
        <SessionProvider session={pageProps.session}>
          <ChakraProvider theme={extendTheme(theme)}>
            <Header />
            <Flex
              flexDirection="column"
              width="100vw"
              minHeight="calc(100vh - 450px)"
              justifyContent="center"
              alignItems="center"
              as="main"
              py={16}
            >
              <Component {...pageProps} />
            </Flex>
            <Footer />
          </ChakraProvider>
        </SessionProvider>
      </SWRConfig>
      <Analytics />
    </>
  );
}

export default appWithTranslation(MyApp);
