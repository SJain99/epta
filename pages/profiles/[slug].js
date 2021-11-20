import { createClient } from "contentful";
import { Flex, Link, Heading, Image, Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import JobCard from "../../components/JobCard";
import ProjectCard from "../../components/ProjectCard";
import EducationCard from "../../components/EducationCard";

const Profile = ({profile}) => {
    const jobOptions = {
        renderNode: {
          [BLOCKS.EMBEDDED_ENTRY]: (node) => {
            const { title, company, duration, description } = node.data.target.fields;
            return <JobCard title={title} company={company} duration={duration} description={description} />
          }
        }
      };
      const educationOptions = {
        renderNode: {
          [BLOCKS.EMBEDDED_ENTRY]: (node) => {
            const { major, school, timespan } = node.data.target.fields;
            return <EducationCard major={major} school={school} timespan={timespan} />
          }
        }
      };
      const skillOptions = {
        renderNode: {
          [BLOCKS.HEADING_3]: (node, children) => (
              <Text fontSize="2xl" fontWeight="bold" mt={4}>{children}</Text>
          ),
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
      const projectOptions = {
        renderNode: {
          [BLOCKS.EMBEDDED_ENTRY]: (node) => {
            const { name, status, description } = node.data.target.fields;
            return <ProjectCard name={name} status={status} description={description} />
          }
        }
      };
    return (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
        >
          <Header />
          <Flex maxWidth="1000px" p={4} width="100%">
            <Link href="/">&#8592; Go to Home Page</Link>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            height="100%"
            my={4}
          >
              <Image src={"https:" + profile.fields.profilePicture.fields.file.url} borderRadius="full" width="200px" mb={4}/>
              <Heading textAlign="center" px={4} fontFamily="Prata" fontSize="5xl" mb={4}>{profile.fields.fullName}</Heading>
              <Text align="center" maxWidth="1000px" px={4}>{profile.fields.aboutMe}</Text>
              <Text textAlign="center" px={4} mt={12} mb={4} fontFamily="Prata" fontWeight="bold" fontSize="3xl">Work Experience</Text>
              {documentToReactComponents(profile.fields.workExperience, jobOptions)}
              <Text textAlign="center" px={4} mt={12} mb={4} fontFamily="Prata" fontWeight="bold" fontSize="3xl">Education</Text>
              {documentToReactComponents(profile.fields.education, educationOptions)}
              <Text textAlign="center" px={4} mt={12} fontFamily="Prata" fontWeight="bold" fontSize="3xl">Skills</Text>
              <Flex maxWidth="1000px" flexDirection="column" width="100%" px={4}>
                {documentToReactComponents(profile.fields.skills, skillOptions)}
              </Flex>
              {profile.fields.projects != undefined && 
                <Text textAlign="center" px={4} mt={12} fontFamily="Prata" fontWeight="bold" fontSize="3xl">Projects</Text>
              }
              {profile.fields.projects != undefined && 
                documentToReactComponents(profile.fields.projects, projectOptions)
              }
          </Flex>
          <Footer />
        </Flex>
    )
}

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticPaths() {
    const res = await client.getEntries({ content_type: 'profile' });
    
    const paths = res.items.map(profile => {
        return {
            params: { slug: profile.fields.slug }
        }
    })
  
    return {
        paths,
        fallback: false
    }
  }

  export async function getStaticProps({params}) {  
    const res = await client.getEntries({ content_type: 'profile', 'fields.slug': params.slug });
  
    return {
      props: {
        profile: res.items[0]
      },
      revalidate: 1,
    }
  }

  export default Profile;