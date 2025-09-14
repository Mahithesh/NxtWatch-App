import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import TabsSection from '../TabsSection'
import VidItem from '../VidItem'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  App,
  Banner,
  Div,
  Ul,
  LoaderDiv,
  NFdiv,
  NFinD,
  NFimg,
  Icon,
} from './styledComponents'

const apiSc = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'Loading',
  initial: 'initial',
}

class Trending extends Component {
  state = {
    videoDeatils: [],
    apistatus: apiSc.initial,
  }

  componentDidMount() {
    this.getVids()
  }

  getVids = async () => {
    this.setState({apistatus: apiSc.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const reps = await fetch(url, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    if (reps.ok) {
      const jsonData = await reps.json()
      const updatedVideos = jsonData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channelName: video.channel.name,
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        videoDeatils: updatedVideos,
        apistatus: apiSc.success,
      })
    } else {
      this.setState({apistatus: apiSc.failure})
    }
  }

  renderSuccess = () => {
    const {videoDeatils} = this.state
    return (
      <Ul>
        {videoDeatils.map(i => (
          <VidItem key={i.id} item={i} />
        ))}
      </Ul>
    )
  }

  renderLoader = () => (
    <LoaderDiv>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
      </div>
    </LoaderDiv>
  )

  renderFailure = isLightTheme => (
    <NFdiv>
      <NFinD>
        <NFimg
          src={
            isLightTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          }
          alt="failure view"
        />
        <h1>Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble to complete your request. Please try again.
        </p>
        <button type="button" onClick={this.getVids}>
          Retry
        </button>
      </NFinD>
    </NFdiv>
  )

  renderView = isl => {
    const {apistatus} = this.state
    switch (apistatus) {
      case apiSc.success:
        return this.renderSuccess()
      case apiSc.loading:
        return this.renderLoader()
      case apiSc.failure:
        return this.renderFailure(isl)
      default:
        return null
    }
  }

  render() {
    return (
      <SavedVideosContext.Consumer>
        {({isLightTheme}) => (
          <div data-testid="trending">
            <Header />
            <App>
              <TabsSection />
              <Div isL={isLightTheme}>
                <Banner isl={isLightTheme}>
                  <Icon isl={isLightTheme} className="logo">
                    <HiFire />
                  </Icon>
                  <h1>Trending</h1>
                </Banner>
                {this.renderView(isLightTheme)}
              </Div>
            </App>
          </div>
        )}
      </SavedVideosContext.Consumer>
    )
  }
}

export default Trending
