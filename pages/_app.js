import "@fontsource/roboto"
import { useEffect } from "react"
import { SWRConfig } from "swr"
import { SessionProvider } from "next-auth/react"
import { useRouter } from 'next/router'

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"

import Header from "/shared/ui/Header/Header"
import Footer from "/shared/ui/Footer/Footer"
import Analytics from "/shared/Analytics"
import { trackPageChange } from "/shared/Analytics/utils"

import fetcher from "/utils/apiClient"

import "../styles/globals.css"


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
}

function MyApp({ Component, pageProps }) {
  const options = {
    fetcher,
  }

  const router = useRouter()

  useEffect(() => trackPageChange(router.events), [router.events])

  return (
    <>
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
      <Analytics />
    </>
  )
}

export default MyApp
