import { Flex, IconButton, Text } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { useState } from "react";
import Image from 'next/image'

const ImageCard = ({profile}) => {
    const [index, setIndex] = useState(0);
    return (
        <Flex maxWidth="1000px" width="100%" flexDirection="column">
            <Flex
                alignItems="center"
                justifyContent="center"
                width="100%"
            >
            <IconButton icon={<ArrowBackIcon />} fontSize="18px" marginRight="8px" variant="solid" borderRadius="full" onClick={() => index == 0 ? setIndex(profile.fields.imageCreations.length-1) : setIndex(index - 1)} />
            <Flex flexDirection="column">
                <Image src={"https:" + profile.fields.imageCreations[index].fields.file.url} width={profile.fields.imageCreations[index].fields.file.details.image.width / 2.5} height={profile.fields.imageCreations[index].fields.file.details.image.height / 2.5} alt={profile.fields.imageCreations[index].fields.title ? profile.fields.imageCreations[index].fields.title : profile.fields.fullName + " image creation"} />
                <Text fontSize="2xl" fontWeight="bold">{profile.fields.imageCreations[index].fields.title}</Text>
                <Text>{profile.fields.imageCreations[index].fields.description}</Text>
            </Flex>
            <IconButton icon={<ArrowForwardIcon />} fontSize="18px" marginLeft="8px" variant="solid" borderRadius="full" onClick={() => index == profile.fields.imageCreations.length-1 ? setIndex(0) : setIndex(index + 1)} />
            </Flex>
        </Flex>
    )
}

export default ImageCard