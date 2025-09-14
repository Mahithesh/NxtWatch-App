import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {HiMenu} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  Nav,
  Ul,
  LogoLi,
  MenuLi,
  PImg,
  PrImg,
  Tbtn,
  Pop,
  PopDiv,
  LogBtn,
  MenuBtn,
  MobileMenuOverlay,
  MobileMenu,
  MobileMenuHeader,
  CloseBtn,
  MobileMenuList,
  MobileMenuListItem,
  MobileMenuLink,
  MobileMenuFooter,
  RightSideContainer,
} from './styledComponents'

const Header = props => {
  const logoutMe = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <SavedVideosContext.Consumer>
      {({
        isLightTheme,
        changeTheme,
        isMobileMenuOpen,
        toggleMobileMenu,
        tabsList,
        activeTab,
        setActive,
      }) => {
        const imgurl = isLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

        return (
          <>
            <Nav isL={isLightTheme}>
              <Ul>
                <MenuLi>
                  <MenuBtn
                    type="button"
                    isL={isLightTheme}
                    onClick={e => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleMobileMenu()
                    }}
                    aria-label="Toggle mobile menu"
                  >
                    <HiMenu />
                  </MenuBtn>
                </MenuLi>
                <LogoLi>
                  <Link to="/">
                    <PImg src={imgurl} alt="website logo" />
                  </Link>
                </LogoLi>
                <RightSideContainer>
                  <Tbtn
                    type="button"
                    data-testid="theme"
                    onClick={() => changeTheme(!isLightTheme)}
                  >
                    {!isLightTheme ? (
                      <IoSunnyOutline color="#fff" />
                    ) : (
                      <FaMoon />
                    )}
                  </Tbtn>
                  <PrImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </RightSideContainer>
              </Ul>
              <Pop
                modal
                trigger={
                  <LogBtn isL={isLightTheme} type="button">
                    <span className="logout-text">Logout</span>
                    <FiLogOut className="logout-icon" />
                  </LogBtn>
                }
              >
                {close => (
                  <PopDiv className="popup-div">
                    <p>Are you sure, you want to logout?</p>
                    <button type="button" onClick={() => close()}>
                      Cancel
                    </button>
                    <button type="button" onClick={logoutMe}>
                      Confirm
                    </button>
                  </PopDiv>
                )}
              </Pop>
            </Nav>

            {/* Mobile Menu Overlay - Only render when open */}
            {isMobileMenuOpen && (
              <MobileMenuOverlay
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            )}

            {/* Mobile Menu - Only render when open */}
            {isMobileMenuOpen && (
              <MobileMenu isL={isLightTheme} isOpen={isMobileMenuOpen}>
                <MobileMenuHeader>
                  <img
                    src={imgurl}
                    alt="website logo"
                    style={{height: '40px', width: '120px'}}
                  />
                  <CloseBtn
                    type="button"
                    isL={isLightTheme}
                    onClick={toggleMobileMenu}
                  >
                    <AiOutlineClose />
                  </CloseBtn>
                </MobileMenuHeader>

                <MobileMenuList>
                  {tabsList.map(({id, displayText, icon: Icon}) => (
                    <MobileMenuListItem
                      key={id}
                      isl={isLightTheme}
                      isc={activeTab === id}
                    >
                      <MobileMenuLink
                        to={`/${id !== 'HOME' ? id.toLowerCase() : ''}`}
                        onClick={() => {
                          setActive(id)
                          toggleMobileMenu()
                        }}
                      >
                        <Icon
                          style={{
                            color: activeTab === id ? '#ff0000' : '#64748b',
                            fontSize: '20px',
                          }}
                        />
                        <span>{displayText}</span>
                      </MobileMenuLink>
                    </MobileMenuListItem>
                  ))}
                </MobileMenuList>

                <MobileMenuFooter isL={isLightTheme}>
                  <p style={{margin: '0 0 15px 0', fontWeight: 'bold'}}>
                    CONTACT US
                  </p>
                  <div
                    style={{display: 'flex', gap: '10px', marginBottom: '15px'}}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                      style={{height: '30px', width: '30px'}}
                    />
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                      style={{height: '30px', width: '30px'}}
                    />
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linkedin logo"
                      style={{height: '30px', width: '30px'}}
                    />
                  </div>
                  <p style={{margin: 0, fontSize: '14px'}}>
                    Enjoy! Now to see your channels and recommendations!
                  </p>
                </MobileMenuFooter>
              </MobileMenu>
            )}
          </>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default withRouter(Header)
