import { Flex, IconButton, Text } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { useState } from "react"

const WrittenPDFCard = ({profile}) => {
    const [index, setIndex] = useState(0);
    return (
        <Flex maxWidth="1000px" width="100%" flexDirection="column">
            <Flex
                alignItems="center"
                justifyContent="center"
                width="100%"
            >
            <IconButton icon={<ArrowBackIcon />} fontSize="18px" marginRight="8px" variant="solid" borderRadius="full" onClick={() => index == 0 ? setIndex(profile.fields.writtenWork.length-1) : setIndex(index - 1)} />
            <iframe src={"https://docs.google.com/viewer?url=" + "https:" + profile.fields.writtenWork[index].fields.file.url + "&embedded=true"} style={{width: "100%", height: "70vh", marginBottom: 16}} frameBorder="0"></iframe>
            <IconButton icon={<ArrowForwardIcon />} fontSize="18px" marginLeft="8px" variant="solid" borderRadius="full" onClick={() => index == profile.fields.writtenWork.length-1 ? setIndex(0) : setIndex(index + 1)} />
            </Flex>
            <Text fontSize="2xl" fontWeight="bold" px={12}>{profile.fields.writtenWork[index].fields.title}</Text>
            <Text px={12}>{profile.fields.writtenWork[index].fields.description}</Text>
        </Flex>
    )
}

export default WrittenPDFCard