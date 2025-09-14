import SavedVideosContext from '../../context/SavedVideosContext'
import {formatYouTubeStyleDate} from '../../utils/dateFormatter'
import {
  InfoWrapper,
  TextContent,
  Card,
  Thumbnail,
  Title,
  ChannelName,
  Meta,
  LINK,
} from './styledComponents'

const VidItem = ({item}) => {
  const {id, thumbnailUrl, title, channelName, viewCount, publishedAt} = item
  const date = formatYouTubeStyleDate(publishedAt)
  return (
    <SavedVideosContext.Consumer>
      {({setActive}) => (
        <Card>
          <LINK to={`/videos/${id}`} onClick={() => setActive('vid')}>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <InfoWrapper>
              <TextContent>
                <Title>{title}</Title>
                <ChannelName>{channelName}</ChannelName>
                <Meta>
                  {viewCount} • {date}
                </Meta>
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
