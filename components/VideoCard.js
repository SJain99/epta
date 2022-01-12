import { Flex, AspectRatio, IconButton, Text } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { useState } from "react";

const VideoCard = ({profile}) => {
  const [index, setIndex] = useState(0);
  return (
    <Flex maxWidth="1000px" width="100%" flexDirection="column">
      <Flex
          alignItems="center"
          justifyContent="center"
          width="100%"
      >
        <IconButton icon={<ArrowBackIcon />} fontSize="18px" marginRight="8px" variant="solid" borderRadius="full" onClick={() => index == 0 ? setIndex(profile.fields.videoCreations.length-1) : setIndex(index - 1)} />
        <AspectRatio ratio={16 / 9} maxW="1000px" width="100%">
          <iframe src={profile.fields.videoCreations[index]} allowFullScreen />
        </AspectRatio>
        <IconButton icon={<ArrowForwardIcon />} fontSize="18px" marginLeft="8px" variant="solid" borderRadius="full" onClick={() => index == profile.fields.videoCreations.length-1 ? setIndex(0) : setIndex(index + 1)} />
      </Flex>
      <Text px={12} fontSize="2xl" fontWeight="bold">{profile.fields.videoTitles[index]}</Text>
      <Text px={12}>{profile.fields.videoDescriptions[index]}</Text>
    </Flex>
    )
}

export default VideoCard