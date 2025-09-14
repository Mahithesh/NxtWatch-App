import SavedVideosContext from '../../context/SavedVideosContext'
import Header from '../Header'
import TabsSection from '../TabsSection'
import {NFdiv, NFinD, NFimg, Div, Apcp} from './styledComponents'

const NotFound = () => (
  <SavedVideosContext.Consumer>
    {({isLightTheme}) => (
      <div>
        <Header />
        <Apcp>
          <TabsSection />
          <Div isL={isLightTheme}>
            <NFdiv>
              <NFinD>
                <NFimg
                  src={
                    isLightTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  }
                  alt="not found"
                />
                <h1>Page Not Found</h1>
                <p>We are sorry, the page you requested could not be found.</p>
              </NFinD>
            </NFdiv>
          </Div>
        </Apcp>
      </div>
    )}
  </SavedVideosContext.Consumer>
)
export default NotFound
