import { Flex, IconButton, Text } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { useState } from "react"

const TechnicalPDFCard = ({profile}) => {
    const [index, setIndex] = useState(0);
    return (
        <Flex maxWidth="1000px" width="100%" flexDirection="column">
            <Flex
                alignItems="center"
                justifyContent="center"
                width="100%"
            >
            <IconButton icon={<ArrowBackIcon />} fontSize="18px" marginRight="8px" variant="solid" borderRadius="full" onClick={() => index == 0 ? setIndex(profile.fields.technicalProjects.length-1) : setIndex(index - 1)} />
            <iframe src={"http://docs.google.com/viewer?url=" + "https:" + profile.fields.technicalProjects[index].fields.file.url + "&embedded=true"} style={{width: "100%", height: "70vh", marginBottom: 16}} frameBorder="0"></iframe>
            <IconButton icon={<ArrowForwardIcon />} fontSize="18px" marginLeft="8px" variant="solid" borderRadius="full" onClick={() => index == profile.fields.technicalProjects.length-1 ? setIndex(0) : setIndex(index + 1)} />
            </Flex>
            <Text fontSize="2xl" fontWeight="bold" px={12}>{profile.fields.technicalProjects[index].fields.title}</Text>
            <Text px={12}>{profile.fields.technicalProjects[index].fields.description}</Text>
        </Flex>
    )
}

export default TechnicalPDFCard