import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  height: 100%;
`

export const NFdiv = styled(LoaderDiv)``

export const NFinD = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1 {
    margin: 10px 0;
    font-size: 28px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  p {
    margin: 0 0 20px 0;
    font-size: 16px;
    line-height: 1.5;
    max-width: 400px;

    @media (max-width: 768px) {
      font-size: 15px;
      max-width: 350px;
      padding: 0 20px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      max-width: 280px;
    }
  }
`
export const NFimg = styled.img`
  height: 300px;
  width: 400px;

  @media (max-width: 768px) {
    height: 250px;
    width: 350px;
  }

  @media (max-width: 480px) {
    height: 200px;
    width: 300px;
  }
`

export const Div = styled.div`
  width: 100%;
  background: red;
  overflow-y: scroll;
  max-height: 92vh;
  background-color: ${({isL}) => (isL ? '#f9f9f9' : '#181818')};
  // background: transparent;
  color: ${({isL}) => (!isL ? '#f9f9f9' : '#181818')};
`

export const Apcp = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const HomeButton = styled(Link)`
  background: ${({isL}) => (isL ? '#4f46e5' : '#6366f1')};
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  min-width: 140px;

  &:hover {
    background: ${({isL}) => (isL ? '#4338ca' : '#5b21b6')};
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(79, 70, 229, 0.3);
    text-decoration: none;
    color: white;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
  }

  @media (max-width: 768px) {
    padding: 14px 20px;
    font-size: 15px;
    min-width: 120px;
  }

  @media (max-width: 480px) {
    padding: 12px 18px;
    font-size: 14px;
    min-width: 110px;
  }
`
