import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {IoIosSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Header from '../Header'
import VideoItem from './VideoItem'
import TabsSection from '../TabsSection'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  HomeApp,
  Banner,
  BannerClose,
  SearchBar,
  App,
  Ul,
  Bdiv,
  DDiv,
  LoaderDiv,
  NFdiv,
  NFinD,
  NFimg,
} from './styledComponents'

const apiSc = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'Loading',
  initial: 'initial',
  notFound: 'notFound',
}

class Home extends Component {
  state = {
    isBannerVisible: true,
    searchQuery: '',
    videosList: [],
    apiStatus: apiSc.initial,
  }

  componentDidMount() {
    this.getVids()
  }

  colseBanner = () => this.setState({isBannerVisible: false})

  getVids = async () => {
    this.setState({apiStatus: apiSc.loading})
    const {searchQuery} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchQuery}`
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
        channelProfileUrl: video.channel.profile_image_url,
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        apiStatus: updatedVideos.length !== 0 ? apiSc.success : apiSc.notFound,
        videosList: updatedVideos,
      })
    } else {
      this.setState({apiStatus: apiSc.failure})
    }
  }

  renderSuccess = () => {
    const {videosList} = this.state
    return (
      <Ul>
        {videosList.map(i => (
          <VideoItem item={i} key={i.id} />
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
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiSc.success:
        return this.renderSuccess()
      case apiSc.loading:
        return this.renderLoader()
      case apiSc.failure:
        return this.renderFailure(isl)
      case apiSc.notFound:
        return (
          <NFdiv>
            <NFinD>
              <NFimg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <h1>No Search Results Found</h1>
              <p>Try different key words or remove search filter</p>
              <button type="button">Retry</button>
            </NFinD>
          </NFdiv>
        )
      default:
        return null
    }
  }

  render() {
    const {searchQuery, isBannerVisible} = this.state

    return (
      <SavedVideosContext.Consumer>
        {({isLightTheme}) => (
          <div>
            <Header />
            <App>
              <TabsSection />
              <DDiv data-testid="home" isL={isLightTheme}>
                {isBannerVisible ? (
                  <Banner data-testid="banner">
                    <Bdiv>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerClose
                        data-testid="close"
                        onClick={this.colseBanner}
                        type="button"
                      >
                        X
                      </BannerClose>
                    </Bdiv>
                    <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                    <button type="button">GET IT NOW</button>
                  </Banner>
                ) : null}
                <HomeApp isL={isLightTheme}>
                  <SearchBar isl={isLightTheme}>
                    <input
                      type="search"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={eve =>
                        this.setState({searchQuery: eve.target.value})
                      }
                      onKeyDown={e =>
                        e.key === 'Enter' ? this.getVids() : null
                      }
                    />
                    <button
                      data-testid="searchButton"
                      onClick={() => this.getVids()}
                      type="button"
                    >
                      <IoIosSearch />
                    </button>
                  </SearchBar>
                  {this.renderView(isLightTheme)}
                </HomeApp>
              </DDiv>
            </App>
          </div>
        )}
      </SavedVideosContext.Consumer>
    )
  }
}

export default Home
