import {MdPlaylistAdd} from 'react-icons/md'
import TabsSection from '../TabsSection'
import Header from '../Header'
import VidItem from '../VidItem'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  App,
  Ul,
  NFimg,
  NFdiv,
  NFinD,
  Div,
  Banner,
  Icon,
} from './styledComponents'

const SavedVideos = () => {
  const renderThs = () => (
    <NFdiv>
      <NFinD>
        <NFimg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <h1>No saved videos found</h1>
        <p>You can save your videos while watching them</p>
      </NFinD>
    </NFdiv>
  )
  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {savedVideosList, isLightTheme} = value
        const isThereVids = savedVideosList.length !== 0
        console.log(savedVideosList)
        return (
          <div data-testid="savedVideos">
            <Header />
            <App>
              <TabsSection />
              <Div isL={isLightTheme}>
                <Banner isl={isLightTheme}>
                  <Icon isl={isLightTheme}>
                    <MdPlaylistAdd />
                  </Icon>
                  <h1>Saved Videos</h1>
                </Banner>
                {isThereVids ? (
                  <Ul>
                    {savedVideosList.map(i => (
                      <VidItem key={i.id} item={i} />
                    ))}
                  </Ul>
                ) : (
                  renderThs()
                )}
              </Div>
            </App>
          </div>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}
export default SavedVideos
