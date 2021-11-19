import { Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react"
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const JobCard = ({title, company, duration, description}) => {
    const options = {
        renderNode: {
          [BLOCKS.UL_LIST]: (node, children) => (
              <UnorderedList>{children}</UnorderedList>
          ),
          [BLOCKS.LIST_ITEM]: (node, children) => (
              <ListItem>
                  {children}
              </ListItem>
          )
        }
      };
    return (
        <Flex maxWidth="1000px" width="100%" flexDirection="column" mb={4} px={4}>
            <Text fontSize="2xl">{title} @ <span style={{fontWeight: 700}}>{company}</span></Text>
            <Text fontWeight="bold">{duration}</Text>
            {documentToReactComponents(description, options)}
        </Flex>
    )
}

export default JobCard