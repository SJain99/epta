import { Flex, IconButton } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { createClient } from 'contentful';
import { useState } from 'react';
import HomePageCard from '../components/HomePageCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home({profiles}) {
  const [ profileIndex, setProfileIndex ] = useState(0);
  const buttonColours = ["green", "teal", "blue", "cyan", "purple", "pink", "gray"];
  return (
    <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
          >
          <Header />
            <Flex
              alignItems="center"
              justifyContent="center"
              height="100%"
              my={20}
            >
              <IconButton icon={<ArrowBackIcon />} fontSize="18px" marginRight="8px" variant="solid" borderRadius="full" onClick={() => profileIndex == 0 ? setProfileIndex(profiles.length-1) : setProfileIndex(profileIndex - 1)} />
              <HomePageCard profile={profiles[profileIndex]} buttonColour={buttonColours[profileIndex]} />
              <IconButton icon={<ArrowForwardIcon />} fontSize="18px" marginLeft="8px" variant="solid" borderRadius="full" onClick={() => profileIndex == profiles.length-1 ? setProfileIndex(0) : setProfileIndex(profileIndex + 1)} />
            </Flex>
            <Footer />
          </Flex>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  const res = await client.getEntries({ content_type: 'profile' });

  return {
    props: {
      profiles: res.items
    },
    revalidate: 1,
  }
}