import styled from 'styled-components'

export const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 10px 0;

  @media (max-width: 768px) {
    gap: 8px;
    margin: 8px 0;
  }

  @media (max-width: 480px) {
    gap: 6px;
    margin: 6px 0;
  }
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const Meta = styled.p`
  margin: 0;
  font-size: 20px;
  margin: 0 auto 0 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const ChannelName = styled.p`
  margin: 0;
  font-size: 12px;
`

export const Ti = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 15px 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 12px 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin: 10px 0;
  }
`

export const LikeDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({isl}) => (isl ? 'black' : 'white')};
  padding: 10px 0;
  gap: 15px;

  button {
    background: transparent;
    border: none;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    padding: 8px 0;
    gap: 12px;

    button {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    padding: 6px 0;
    gap: 10px;
    flex-wrap: wrap;

    button {
      font-size: 16px;
    }
  }
`

export const Like = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({islk}) => (islk === 'LIKE' ? '#2563eb' : '#64748b')};
`
export const DisLike = styled(Like)`
  color: ${({islk}) => (islk === 'DISLIKE' ? '#2563eb' : '#64748b')};
`
export const SaveVid = styled.button`
  cursor: pointer;
  color: ${({vidIn}) => (vidIn ? '#2563eb' : '#64748b')};
`

export const App = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Player = styled.div`
  width: 70vw;
  height: 70vh;
  align-self: center;
  display: flex;
  justify-content: center;

  .react-player {
    // align-self: stretch;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
`

export const Div = styled.div`
  background-color: ${({isLightTheme}) =>
    isLightTheme ? '#f9f9f9' : '#0f0f0f'};
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  color: ${({isLightTheme}) => (!isLightTheme ? '#f9f9f9' : '#181818')};
  overflow-y: scroll;
  max-height: 92vh;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`

export const LoaderDivs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  height: 100%;
`
