import SavedVideosContext from '../../context/SavedVideosContext'
import {
  InfoWrapper,
  TextContent,
  Card,
  Thumbnail,
  Title,
  Meta,
  LINK,
} from './styledComponents'

const VidItem = ({item}) => {
  const {id, thumbnailUrl, title, viewCount} = item
  return (
    <SavedVideosContext.Consumer>
      {({setActive}) => (
        <Card>
          <LINK to={`/videos/${id}`} onClick={() => setActive('vid')}>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <InfoWrapper>
              <TextContent>
                <Title>{title}</Title>
                <Meta>{viewCount}</Meta>
              </TextContent>
            </InfoWrapper>
          </LINK>
        </Card>
      )}
    </SavedVideosContext.Consumer>
  )
}

export default VidItem

// styled-components
