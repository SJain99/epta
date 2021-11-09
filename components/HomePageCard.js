import { ViewIcon } from "@chakra-ui/icons";
import { Box, useColorMode, Image, Text, Button } from "@chakra-ui/react"

const HomePageCard = ({card, buttonColour}) => {
    const { colorMode } = useColorMode();
    return (
        <Box
            maxWidth="300px"
            maxHeight="550px"
            borderRadius={8}
            backgroundColor={colorMode === "light" ? "white" : "gray.800"}
            boxShadow="xl"
            width="100%"
            height="100%"
        >
            <Image
                src={"https:" + card.fields.profilePicture.fields.file.url}
                width="100%"
                borderRadius={8}
            />
            <Text
                mt={2}
                ml={4}
                fontWeight="bold"
                fontSize="3xl"
            >
                {card.fields.fullName}
            </Text>
            <Text
                ml={4}
                mt={-1}
                fontSize="md"
            >
                {card.fields.jobTitle}
            </Text>
            <Text
                ml={4}
                mt={2}
                fontSize="md"
            >
                <span style={{fontWeight: 700}}>Current Status: </span>{card.fields.currentStatus}
            </Text>
            <Button colorScheme={buttonColour} variant="solid" ml={4} mt={2} leftIcon={<ViewIcon />}>Click to view my full profile</Button>
        </Box>
    );
}

export default HomePageCard