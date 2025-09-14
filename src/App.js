import {Component} from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'

import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {AiFillHome} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

import SavedVideosContext from './context/SavedVideosContext'

import Home from './components/Home'
import Login from './components/Login'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoDetails from './components/VideoDetails'
import NotFound from './components/NotFound'
import PRoute from './components/PRoute'

import './App.css'

const tabsList = [
  {id: 'HOME', displayText: 'Home', icon: AiFillHome},
  {id: 'TRENDING', displayText: 'Trending', icon: HiFire},
  {id: 'GAMING', displayText: 'Gaming', icon: SiYoutubegaming},
  {id: 'SAVED-VIDEOS', displayText: 'Saved Videos', icon: MdPlaylistAdd},
]

// Replace your code here
class App extends Component {
  state = {
    activeTab: tabsList[0].id,
    savedVideosList: [],
    isLightTheme: true,
    isMobileMenuOpen: false,
  }

  changeTheme = islight => this.setState({isLightTheme: islight})

  saveThisVid = item => {
    const {savedVideosList} = this.state
    const vidIn = savedVideosList.some(pathidi => pathidi.id === item.id)
    this.setState({
      savedVideosList: vidIn
        ? savedVideosList.filter(i => i.id !== item.id)
        : [item, ...savedVideosList],
    })
  }

  setActive = activeTab => this.setState({activeTab})

  toggleMobileMenu = () => {
    this.setState(prevState => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen,
    }))
  }

  render() {
    const {
      savedVideosList,
      isLightTheme,
      activeTab,
      isMobileMenuOpen,
    } = this.state
    return (
      <SavedVideosContext.Provider
        value={{
          savedVideosList,
          saveThisVid: this.saveThisVid,
          activeTab,
          isLightTheme,
          isMobileMenuOpen,
          changeTheme: this.changeTheme,
          tabsList,
          setActive: this.setActive,
          toggleMobileMenu: this.toggleMobileMenu,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <PRoute exact path="/" component={Home} />
          <PRoute exact path="/gaming" component={Gaming} />
          <PRoute exact path="/trending" component={Trending} />
          <PRoute exact path="/saved-videos" component={SavedVideos} />
          <PRoute exact path="/videos/:id" component={VideoDetails} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </SavedVideosContext.Provider>
    )
  }
}

export default App
