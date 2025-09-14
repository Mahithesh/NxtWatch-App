import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  tabsList: [],
  isLightTheme: true,
  activeTab: 'HOME',
  isMobileMenuOpen: false,
  saveThisVid: () => {},
  changeTheme: () => {},
  setActive: () => {},
  toggleMobileMenu: () => {},
})

export default SavedVideosContext
