import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  min-height: 8vh;
  padding: 20px;
  background: ${({isL}) => (isL ? 'white' : '#212121')};
  color: ${({isL}) => (!isL ? '#f9f9f9' : '#181818')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px 20px;
    min-height: 60px;
  }
`
export const Ul = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  list-style-type: none;
  padding: 0;
  justify-content: flex-start;
  margin: 0;

  @media (max-width: 768px) {
    justify-content: space-between;
    gap: 10px;
  }
`
export const Li = styled.li`
  margin-right: auto;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`

export const LogoLi = styled.li`
  margin-right: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-right: 0;
    flex-shrink: 0;
    flex-grow: 1;
    order: 0; /* Logo in middle */
  }
`

export const MenuLi = styled.li`
  margin-right: 0;
  flex-shrink: 0;
  order: -1; /* Ensure hamburger comes first */

  @media (max-width: 768px) {
    margin-right: 0;
  }

  @media (min-width: 769px) {
    display: none;
  }
`
export const PImg = styled.img`
  width: 120px;
  height: 40px;
  padding: 5px 0;
  margin: 0;
  display: block;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100px;
    height: 30px;
    padding: 0;
    margin: 0;
  }
`

export const PrImg = styled.img`
  height: 35px;
  width: 35px;
  margin: 0 10px;
`
export const Tbtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  align-content: center;
  cursor: pointer;
`
export const Pop = styled(Popup)`
  background: transparent;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

  &-content {
    background: ${({isL}) => (isL ? '#fff' : '#212121')} !important;
    border: none !important;
    border-radius: 8px !important;
    padding: 0 !important;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2) !important;
  }

  &-overlay {
    background: rgba(0, 0, 0, 0.5) !important;
  }
`
export const PopDiv = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({isL}) => (isL ? '#181818' : '#f9f9f9')};
  background-color: ${({isL}) => (isL ? '#fff' : '#212121')};
  padding: 24px;
  border-radius: 8px;
  gap: 20px;

  p {
    margin: 0 0 15px 0;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    width: 260px;
    padding: 20px;

    p {
      font-size: 15px;
    }
  }
`

export const PopupButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`

export const CancelBtn = styled.button`
  background: transparent;
  border: 1px solid ${({isL}) => (isL ? '#94a3b8' : '#64748b')};
  color: ${({isL}) => (isL ? '#64748b' : '#94a3b8')};
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 80px;

  &:hover {
    background-color: ${({isL}) => (isL ? '#f8fafc' : '#334155')};
    border-color: ${({isL}) => (isL ? '#64748b' : '#94a3b8')};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    width: 100%;
  }
`

export const ConfirmBtn = styled.button`
  background: ${({isL}) => (isL ? '#dc2626' : '#ef4444')};
  border: 1px solid ${({isL}) => (isL ? '#dc2626' : '#ef4444')};
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 80px;

  &:hover {
    background: ${({isL}) => (isL ? '#b91c1c' : '#dc2626')};
    border-color: ${({isL}) => (isL ? '#b91c1c' : '#dc2626')};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(220, 38, 38, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(220, 38, 38, 0.3);
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    width: 100%;
  }
`
export const LogBtn = styled.button`
  background: transparent;
  border: 1px solid ${({isL}) => (isL ? '#3b82f6' : '#fff')};
  color: ${({isL}) => (isL ? '#3b82f6' : '#fff')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({isL}) => (isL ? '#f1f5f9' : '#383838')};
  }

  .logout-text {
    display: block;
  }

  .logout-icon {
    display: none;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    padding: 8px;
    min-width: 40px;
    min-height: 40px;

    .logout-text {
      display: none;
    }

    .logout-icon {
      display: block;
    }
  }
`

export const MenuBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 25px;
  color: ${({isL}) => (isL ? '#181818' : '#f9f9f9')};
  margin-right: 15px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 102;

  &:hover {
    background-color: ${({isL}) => (isL ? '#f1f5f9' : '#383838')};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: flex;
    font-size: 24px;
    margin-right: 10px;
    min-width: 44px;
    min-height: 44px;
    padding: 10px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
  opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
  visibility: ${({isOpen}) => (isOpen ? 'visible' : 'hidden')};
  pointer-events: ${({isOpen}) => (isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: ${({isL}) => (isL ? 'white' : '#212121')};
  color: ${({isL}) => (!isL ? '#f9f9f9' : '#181818')};
  z-index: 999;
  transform: ${({isOpen}) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  pointer-events: ${({isOpen}) => (isOpen ? 'auto' : 'none')};
  visibility: ${({isOpen}) => (isOpen ? 'visible' : 'hidden')};

  @media (min-width: 769px) {
    display: none;
  }
`

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
`

export const CloseBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  color: ${({isL}) => (isL ? '#181818' : '#f9f9f9')};
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({isL}) => (isL ? '#f1f5f9' : '#383838')};
  }

  &:active {
    transform: scale(0.95);
  }
`

export const MobileMenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex: 1;
`

export const MobileMenuListItem = styled.li`
  margin: 0;
  background: ${({isl, isc}) => {
    if (isl) {
      return isc ? '#f1f5f9' : ''
    }
    return isc ? '#383838' : ''
  }};
  padding: 15px 20px;
  min-width: 100%;
`

export const MobileMenuLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 500;
`

export const MobileMenuFooter = styled.div`
  padding: 20px;
  border-top: 1px solid ${({isL}) => (isL ? '#e2e8f0' : '#475569')};
`

export const RightSideContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    margin-left: auto;
    gap: 10px;
    order: 1; /* Ensure this comes after logo */
  }
`
