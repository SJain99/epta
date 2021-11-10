import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex mb={4} justifyContent="space-between" alignItems="center">
            <Text>&copy; Epta - 2021 &nbsp;</Text>
            <Text>&#8226;&nbsp;&nbsp;&nbsp;</Text>
            <Link href="/about" textDecoration="underline">About Us</Link>
        </Flex>
    )
}

export default Footer;