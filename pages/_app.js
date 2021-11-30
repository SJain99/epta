import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { pageview } from "../utils/analytics";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      "body": {
        backgroundColor: props.colorMode === "light" ? "gray.100" : "gray.900"
      },
    }),
  },
  fonts: {
    body: `Inter,Prata,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Inter,Prata,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  initialColorMode: "light",
  useSystemColorMode: false
});

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default MyApp;