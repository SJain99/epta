import { Flex, Text } from "@chakra-ui/react"

const EducationCard = ({major, school, timespan}) => {
    return (
        <Flex maxWidth="1000px" width="100%" flexDirection="column" mb={4} px={4}>
            <Text fontSize="2xl">{major} @ <span style={{fontWeight: 700}}>{school}</span></Text>
            <Text fontWeight="bold">{timespan}</Text>
        </Flex>
    )
}

export default EducationCard