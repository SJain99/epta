import { Wrap, WrapItem } from "@chakra-ui/react"
import Image from 'next/image'

const ImageCard = ({profile}) => {
    return (
        <Wrap maxWidth="1000px" px={4} justify="center">
            {profile.fields.imageCreations.map(image => (
                <WrapItem key={image.sys.id}>
                    <Image src={"https:" + image.fields.file.url} width={317} height={317} alt={image.fields.title ? image.fields.title : profile.fields.fullName + " image creation"} />
                </WrapItem>
            ))}
        </Wrap>
    )
}

export default ImageCard