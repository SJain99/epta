import { Flex, Link, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex 
            justifyContent="space-between" 
            alignItems="center"
            backgroundColor={colorMode === "light" ? "white" : "gray.800"}
            width="100%"
          >
              <Link href="/" fontSize="3xl" fontWeight="bold" p={4} fontFamily="Prata">
              Epta
              </Link>
              <IconButton
                aria-label="icon"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                fontSize="28px"
                variant="subtle"
                _hover={{color:"gray.700"}}
                onClick={toggleColorMode}
                mr={2}
              />
          </Flex>
    )
}

export default Header;