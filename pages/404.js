import { Heading, Flex, Text, Link } from "@chakra-ui/react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const NotFound = () => {
    return (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
        >
            <Header />
            <Flex maxWidth="1000px" justifyContent="center" alignItems="center" mx="auto" my={20} px={4} flexDirection="column">
                <Heading fontFamily="Prata" mb={4} px={4}>Oops! That page could not be found.</Heading>
                <Text>Somehow, you stumbled upon a page that has no content on it! Let&apos;s correct that, shall we? {""}<Link href="/" color="purple" fontWeight="bold">Go back to homepage</Link></Text>
            </Flex>
            <Footer />
        </Flex>
    )
}

export default NotFound