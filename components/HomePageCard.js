import { ViewIcon } from "@chakra-ui/icons";
import { Box, useColorMode, Image, Text, Button } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router";

const HomePageCard = ({profile, buttonColour}) => {
    const { colorMode } = useColorMode();
    const router = useRouter();
    return (
        <Box
            maxWidth="300px"
            minHeight="550px"
            maxHeight="550px"
            borderRadius={8}
            backgroundColor={colorMode === "light" ? "white" : "gray.800"}
            boxShadow="xl"
            width="100%"
            height="100%"
            p={1}
        >
            <Image
                src={"https:" + profile.fields.profilePicture.fields.file.url}
                width="100%"
                borderRadius={8}
            />
            <Text
                mt={4}
                ml={3}
                fontWeight="bold"
                fontSize="3xl"
            >
                {profile.fields.fullName}
            </Text>
            <Text
                ml={3}
                mt={-1}
                fontSize="md"
            >
                {profile.fields.jobTitle}
            </Text>
            <Text
                ml={3}
                mt={2}
                fontSize="md"
            >
                <span style={{fontWeight: 700}}>Current Status: </span>{profile.fields.currentStatus}
            </Text>
            <Button onClick={() => router.push('/profiles/' + profile.fields.slug)} colorScheme={buttonColour} variant="solid" ml={3} mt={4} leftIcon={<ViewIcon />}>Click to view my full profile</Button>
        </Box>
    );
}

export default HomePageCard