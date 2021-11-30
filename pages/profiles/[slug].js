import { createClient } from "contentful";
import { Flex, Link, Heading, Image, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import JobCard from "../../components/JobCard";
import ProjectCard from "../../components/ProjectCard";
import EducationCard from "../../components/EducationCard";
import DesignPDFCard from "../../components/DesignPDFCard";
import TechnicalPDFCard from "../../components/TechnicalPDFCard";
import WrittenPDFCard from "../../components/WrittenPDFCard";
import ImageCard from "../../components/ImageCard";
import VideoCard from "../../components/VideoCard";
import RealEstatePDFCard from "../../components/RealEstatePDFCard";

const Profile = ({profile}) => {
    if(!profile) return <div>Temp Loading Screen</div>
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
                <Text textAlign="center" px={4} mt={12} mb={4} fontFamily="Prata" fontWeight="bold" fontSize="3xl">Projects</Text>
              }
              {profile.fields.projects != undefined && 
                documentToReactComponents(profile.fields.projects, projectOptions)
              }
              {profile.fields.designProjects != undefined && 
                <Text textAlign="center" px={4} mt={12} mb={4} fontFamily="Prata" fontWeight="bold" fontSize="3xl">Design Projects</Text>
              }
              {profile.fields.designProjects != undefined &&
                <DesignPDFCard profile={profile} />
              }
              {profile.fields.technicalProjects != undefined && 
                <Text textAlign="center" px={4} mt={12} mb={4} fontFamily="Prata" fontWeight="bold" fontSize="3xl">Technical Projects</Text>
              }
              {profile.fields.technicalProjects != undefined &&
                <TechnicalPDFCard profile={profile} />
              }
              {profile.fields.imageCreations != undefined && 
                <Text textAlign="center" px={4} mt={12} mb={4} fontFamily="Prata" fontWeight="bold" fontSize="3xl">Image Creations</Text>
              }
              {profile.fields.imageCreations != undefined &&
                <ImageCard profile={profile} />
              }
              {profile.fields.videoCreations != undefined && 
                <Text textAlign="center" px={4} mt={12} mb={4} fontFamily="Prata" fontWeight="bold" fontSize="3xl">Video Creations</Text>
              }
              {profile.fields.videoCreations != undefined &&
                <VideoCard profile={profile} />
              }
              {profile.fields.writtenWork != undefined && 
                <Text textAlign="center" px={4} mt={12} mb={4} fontFamily="Prata" fontWeight="bold" fontSize="3xl">Written Work</Text>
              }
              {profile.fields.writtenWork != undefined &&
                <WrittenPDFCard profile={profile} />
              }
              {profile.fields.realEstateListings != undefined && 
                <Text textAlign="center" px={4} mt={12} mb={4} fontFamily="Prata" fontWeight="bold" fontSize="3xl">Real Estate Listings</Text>
              }
              {profile.fields.realEstateListings != undefined &&
                <RealEstatePDFCard profile={profile} />
              }
              <Text textAlign="center" px={4} mt={12} mb={4} fontFamily="Prata" fontWeight="bold" fontSize="3xl">Contact Me</Text>
              <Text align="center" maxWidth="1000px" px={4} mb={4}>If you would like to get in touch with me about my current endeavours, have an opportunity to present to me, or even just have something cool/interesting to send, feel free to{" "}<Link color="purple" href={"mailto:" + profile.fields.email} fontWeight="bold">send me an email!</Link> I will try and respond back to you as soon as possible.</Text>
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
        fallback: true
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