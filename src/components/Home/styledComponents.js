import styled from 'styled-components'

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: ${({isL}) => (!isL ? '#000' : '#fff')};
  }

  button {
    background-color: transparent;
    border: 1px solid #000;
    padding: 6px 12px;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    align-self: flex-start;
    color: ${({isL}) => (!isL ? '#000' : '#fff')};
  }

  @media (max-width: 768px) {
    padding: 15px;
    gap: 8px;

    p {
      font-size: 13px;
    }

    button {
      padding: 8px 14px;
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 6px;

    p {
      font-size: 12px;
    }

    button {
      padding: 6px 10px;
      font-size: 12px;
    }
  }
`

export const BannerClose = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  font-size: 18px;
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  max-width: 400px;
  margin-bottom: 20px;
  background-color: ${({isl}) => (isl ? 'white' : 'black')};

  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 8px 10px;
    font-size: 14px;
    background-color: transparent;
    color: ${({isl}) => (isl ? '#000' : '#fff')};
  }

  button {
    background-color: ${({isl}) => (isl ? '#f1f1f1' : '#313131')};
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 15px;

    input {
      font-size: 16px;
      padding: 10px 12px;
    }

    button {
      padding: 10px 14px;
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 12px;

    input {
      font-size: 16px;
      padding: 12px 14px;
    }

    button {
      padding: 12px 16px;
      font-size: 16px;
    }
  }
`

export const App = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  // max-height: 55vh;
  justify-content: space-between;
  max-width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;
  }
`

export const HomeApp = styled.div`
  flex-grow: 1;
  padding: 20px;
  height: 100%;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`

export const DDiv = styled.div`
  overflow-y: scroll;
  max-height: 92vh;
  width: 100wh;
  flex-grow: 1;
  background-color: ${({isL}) => (isL ? '#f9f9f9' : '#181818')};
  // background: transparent;
  color: ${({isL}) => (!isL ? '#f9f9f9' : '#181818')};
`

export const Bdiv = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    height: 50px;
    width: 150px;
  }
`
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
`
export const NFimg = styled.img`
  height: 300px;
  width: 400px;
`
