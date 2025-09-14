import SavedVideosContext from '../../context/SavedVideosContext'
import {Tabdiv, Img, Ul, L, Li} from './styledComponents'

const TabsSection = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {isLightTheme, activeTab, tabsList, setActive} = value
      console.log(isLightTheme)
      return (
        <Tabdiv isL={isLightTheme}>
          <Ul>
            {tabsList.map(({id, displayText, icon: Icon}) => (
              <Li isl={isLightTheme} isc={activeTab === id} key={id}>
                <L
                  to={`/${id !== 'HOME' ? id.toLowerCase() : ''}`}
                  onClick={() => setActive(id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'inherit',
                  }}
                >
                  <Icon
                    style={{
                      color: activeTab === id ? 'red' : 'gray',
                      fontSize: '24px',
                    }}
                  />
                  <span
                    style={{
                      color: activeTab === id ? 'inherit' : 'gray',
                      fontSize: '24px',
                      fontWeight: '700',
                    }}
                  >
                    {displayText}
                  </span>
                </L>
              </Li>
            ))}
          </Ul>
          <div className="conc">
            <p>CONTACT US</p>
            <div>
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                className="scm-logo"
              />
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
                className="scm-logo"
              />
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
                className="scm-logo"
              />
            </div>
            <p>Enjoy! Now to see your channels and recommendations!</p>
          </div>
        </Tabdiv>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default TabsSection
