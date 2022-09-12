import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";

import Header from '../shared/ui/Header/Header'
import Footer from '../shared/ui/Footer/Footer'

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
