import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatYouTubeStyleDate} from '../../utils/dateFormatter'
import Header from '../Header'
import TabsSection from '../TabsSection'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  InfoWrapper,
  TextContent,
  ChannelLogo,
  Meta,
  ChannelName,
  Ti,
  Like,
  LikeDiv,
  SaveVid,
  Player,
  App,
  Div,
  DisLike,
  LoaderDivs,
} from './styledComponents'

class VideoDetails extends Component {
  state = {
    isLiked: null,
    videoDetails: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getDeatils()
  }

  setLike = id => {
    const {isLiked} = this.state
    if (isLiked === id) {
      this.setState({isLiked: null})
    } else {
      this.setState({isLiked: id})
    }
  }

  getDeatils = async () => {
    this.setState({isLoading: true})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const reps = await fetch(`https://apis.ccbp.in/videos/${id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })

    if (reps.ok) {
      const jsonData = await reps.json()
      const details = jsonData.video_details
      this.setState({
        videoDetails: {
          id: details.id,
          title: details.title,
          videoUrl: details.video_url,
          thumbnailUrl: details.thumbnail_url,
          channelName: details.channel.name,
          profileImageUrl: details.channel.profile_image_url,
          subscriberCount: details.channel.subscriber_count,
          viewCount: details.view_count,
          publishedAt: formatYouTubeStyleDate(details.published_at),
          description: details.description,
        },
        isLoading: false,
      })
    } else {
      console.log('Hello')
    }
  }

  renderLoader = () => (
    <LoaderDivs>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
      </div>
    </LoaderDivs>
  )

  render() {
    const {videoDetails, isLiked, isLoading} = this.state
    const {
      id,
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
      profileImageUrl,
      channelName,
      subscriberCount,
    } = videoDetails
    console.log(profileImageUrl)
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {saveThisVid, isLightTheme, savedVideosList} = value
          const vidIn = savedVideosList.some(pathidi => pathidi.id === id)
          console.log('vidin', vidIn)
          return (
            <div data-testid="videoItemDetails">
              <Header />
              <App>
                <TabsSection />
                <Div isLightTheme={isLightTheme}>
                  {!isLoading ? (
                    <div>
                      <Player>
                        <ReactPlayer
                          width="100%"
                          height="100%"
                          className="react-player"
                          url={videoUrl}
                        />
                      </Player>
                      <Ti>{title}</Ti>
                      <LikeDiv isl={isLightTheme}>
                        <Meta>
                          {viewCount} • {publishedAt}
                        </Meta>
                        <Like
                          islk={isLiked}
                          onClick={() => this.setLike('LIKE')}
                          type="button"
                        >
                          <BiLike /> Like
                        </Like>
                        <DisLike
                          islk={isLiked}
                          onClick={() => this.setLike('DISLIKE')}
                          type="button"
                        >
                          <BiDislike /> Dislike{' '}
                        </DisLike>
                        <SaveVid
                          type="button"
                          onClick={() => {
                            saveThisVid(videoDetails)
                          }}
                          vidIn={vidIn}
                        >
                          <MdPlaylistAdd /> {!vidIn ? 'Save' : 'Saved'}
                        </SaveVid>
                      </LikeDiv>
                      <InfoWrapper>
                        <ChannelLogo src={profileImageUrl} alt="channel logo" />
                        <TextContent>
                          <ChannelName>{channelName}</ChannelName>
                          <p>{subscriberCount} subscribers</p>
                          <p>{description}</p>
                        </TextContent>
                      </InfoWrapper>
                    </div>
                  ) : (
                    this.renderLoader()
                  )}
                </Div>
              </App>
            </div>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default VideoDetails
