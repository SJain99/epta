import Header from "../components/Header";
import Footer from "../components/Footer";
import { Flex, Link, Heading, Text } from '@chakra-ui/react';

const about = () => {
    return (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
        >
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