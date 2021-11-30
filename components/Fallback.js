import { SkeletonText, Skeleton, SkeletonCircle, Box } from "@chakra-ui/react";

const Fallback = () => {
    return (
        <Box pt={150} maxWidth="1000px" mx="auto" px={4}>
            <SkeletonCircle size="200" mx="auto" />
            <Skeleton height="60px" width="300px" mt="4" mx="auto" />
            <SkeletonText mt="4" noOfLines={8} spacing="4" />
        </Box>
    )
}

export default Fallback