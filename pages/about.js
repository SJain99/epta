import Header from "../components/Header";
import Footer from "../components/Footer";
import { Flex, Link, Heading, Text } from '@chakra-ui/react';
import Head from "next/head"

const about = () => {
    return (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
        >
          <Head>
            <title>About Us | Epta</title>
            <link rel="canonical" href="https://www.epta.ca/about" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="A portfolio website for seven friends based out of Toronto, Ontario, Canada, each with their own skills, knowledge and expertise." />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="About Us | Epta" />
            <meta property="og:description" content="A portfolio website for seven friends based out of Toronto, Ontario, Canada, each with their own skills, knowledge and expertise." />
            <meta property="og:url" content="https://www.epta.ca/about" />
            <meta property="og:site_name" content="Epta" />
          </Head>
          <Header />
          <Flex maxWidth="1000px" p={4} width="100%">
            <Link href="/">&#8592; Go to Home Page</Link>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            height="100%"
            my={4}
          >
              <Heading fontFamily="Prata" fontSize="5xl">About Us</Heading>
              <Text maxWidth="1000px" align="center" px={4} mt={4}>Welcome to <span style={{fontWeight: 700}}>Epta</span>! The name of the website is derived from the Greek word &quot;<span style={{fontWeight: 700}}>ἑπτά</span>&quot; which translates to &quot;seven&quot; in English. The significance of that number being the name of the website is because it represents us, a group of seven friends based out of Toronto, Ontario, Canada who each bring their unique sets of skills and knowledge to the workforce.<br /><br />Our philosophy in developing this website was to shift away from the traditional concept of creating a portfolio website for each individual person, but instead, to create one website to house all of our portfolios, since we each bring with us a set of expertise in areas different from that of another.<br /><br />We encourage you to return to the home page and scroll through the cards to view any profiles that catch your interest!</Text>
          </Flex>
          <Footer />
        </Flex>
    )
}

export default about;