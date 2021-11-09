import { Flex, Link, IconButton, useColorMode, Text } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { createClient } from 'contentful';
import { useState } from 'react';
import HomePageCard from '../components/HomePageCard';

export default function Home({cards}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [ profileIndex, setProfileIndex ] = useState(0);
  const buttonColours = ["red", "green"];
  return (
    <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
          height="100vh"
          display="flex"
          backgroundColor={colorMode === "light" ? "gray.100" : "gray.900"}
          >
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
          <Flex alignItems="center" flexDirection="column" height="100%">
            <Text maxWidth="1000px" align="center" px={4} pt={4}>Welcome to <span style={{fontWeight: 700}}>Epta</span>! The name of the website is derived from the Greek word &quot;<span style={{fontWeight: 700}}>ἑπτά</span>&quot; which translates to &quot;seven&quot; in English. The significance of that number being the name of the website is because it represents us, a group of seven friends based out of Toronto, Ontario, Canada who each bring their unique sets of skills and knowledge to the workforce. Feel free to scroll through the cards below and view any profiles that grab your attention!</Text>
            <Flex
              alignItems="center"
              justifyContent="center"
              height="100%"
              mb={16}
              pt={4}
            >
              <IconButton icon={<ArrowBackIcon />} fontSize="18px" marginRight="8px" variant="solid" borderRadius="full" onClick={() => profileIndex == 0 ? setProfileIndex(cards.length-1) : setProfileIndex(profileIndex - 1)} />
              <HomePageCard card={cards[profileIndex]} buttonColour={buttonColours[profileIndex]} />
              <IconButton icon={<ArrowForwardIcon />} fontSize="18px" marginLeft="8px" variant="solid" borderRadius="full" onClick={() => profileIndex == cards.length-1 ? setProfileIndex(0) : setProfileIndex(profileIndex + 1)} />
            </Flex>
            <Text mb={4}>&copy; Epta - 2021</Text>
          </Flex>
        </Flex>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  const res = await client.getEntries({ content_type: 'homePageCard' });

  return {
    props: {
      cards: res.items
    }
  }
}