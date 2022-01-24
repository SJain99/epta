import { ViewIcon } from "@chakra-ui/icons";
import { Box, useColorMode, Image, Text, Button } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router";

const HomePageCard = ({profile, buttonColour}) => {
    const { colorMode } = useColorMode();
    const router = useRouter();
    return (
        <Box
            maxWidth="488px"
            borderRadius={8}
            backgroundColor={colorMode === "light" ? "white" : "gray.800"}
            boxShadow="xl"
            width="100%"
            height="100%"
            px={1}
            pt={1}
            pb={4}
        >
            <Image
                src={"https:" + profile.fields.profilePicture.fields.file.url}
                alt={profile.fields.fullName}
                width="100%"
                borderRadius={8}
            />
            <Text
                mt={3}
                mx={2}
                fontWeight="bold"
                fontSize="2xl"
            >
                {profile.fields.fullName}
            </Text>
            <Text
                ml={2}
                mt={-1}
                fontSize="md"
            >
                {profile.fields.jobTitle}
            </Text>
            <Text
                ml={2}
                mt={2}
                fontSize="md"
            >
                <span style={{fontWeight: 700}}>Current Status: </span>{profile.fields.currentStatus}
            </Text>
            <Button width="96%" onClick={() => router.push('/profiles/' + profile.fields.slug)} colorScheme={buttonColour} variant="solid" ml={2} mt={4} leftIcon={<ViewIcon />}>Click to view my full profile</Button>
        </Box>
    );
}

export default HomePageCard