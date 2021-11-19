import { Flex, Text, UnorderedList, ListItem, Badge, Link } from "@chakra-ui/react"
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ProjectCard = ({name, status, description}) => {
    const options = {
        renderNode: {
          [BLOCKS.UL_LIST]: (node, children) => (
              <UnorderedList>{children}</UnorderedList>
          ),
          [BLOCKS.LIST_ITEM]: (node, children) => (
              <ListItem>
                  {children}
              </ListItem>
          ),
          [INLINES.HYPERLINK]: (node, children) => (
              <Link href={children} textDecoration="underline">{children}</Link>
          )
        }
      };
    return (
        <Flex maxWidth="1000px" width="100%" flexDirection="column" mb={4} px={4}>
            <Text fontSize="2xl" fontWeight="bold">{name}</Text>
            <Text>Status: <Badge colorScheme="purple">{status}</Badge></Text>
            {documentToReactComponents(description, options)}
        </Flex>
    )
}

export default ProjectCard