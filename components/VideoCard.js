import { Wrap } from "@chakra-ui/react"
import { INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const VideoCard = ({profile}) => {
    const options = {
        renderNode: {
          [INLINES.HYPERLINK]: (node, children) => (
            <iframe src={children} width="317px" height="178px" allowFullScreen/>
          )
        }
      };
    return (
        <Wrap maxWidth="1000px" width="100%" justify="center">
            {documentToReactComponents(profile.fields.videoCreations, options)}
        </Wrap>
    )
}

export default VideoCard