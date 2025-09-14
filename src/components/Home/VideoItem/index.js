import SavedVideosContext from '../../../context/SavedVideosContext'
import {formatYouTubeStyleDate} from '../../../utils/dateFormatter'
import {
  InfoWrapper,
  TextContent,
  Card,
  Thumbnail,
  ChannelLogo,
  Title,
  ChannelName,
  Meta,
  LINK,
} from './styledComponents'

const VideoCard = ({item}) => {
  const {
    id,
    thumbnailUrl,
    channelProfileUrl,
    title,
    channelName,
    viewCount,
    publishedAt,
  } = item
  const date = formatYouTubeStyleDate(publishedAt)
  return (
    <SavedVideosContext.Consumer>
      {({setActive}) => (
        <Card>
          <LINK to={`/videos/${id}`} onClick={() => setActive('vid')}>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <InfoWrapper>
              <ChannelLogo src={channelProfileUrl} alt="channel logo" />
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

export default VideoCard

// styled-components
