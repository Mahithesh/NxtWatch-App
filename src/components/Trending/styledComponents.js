import styled from 'styled-components'

export const App = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Banner = styled.div`
  display: flex;
  align-items: center;
  color: red;
  padding: 10px 30px;
  gap: 10px;
  background: ${({isl}) => (isl ? '#f1f1f1' : '#181818')};

  @media (max-width: 768px) {
    padding: 10px 20px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    padding: 8px 15px;
    gap: 6px;
  }
`
export const Icon = styled.div`
  font-size: 40px;
  padding: 30px;
  border-radius: 50%;
  background: ${({isl}) => (isl ? '#e1e9f0' : '#0f0f0f')};
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 32px;
    padding: 24px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    padding: 20px;
  }
`

export const Div = styled.div`
  width: 100%;
  background: red;
  overflow-y: scroll;
  max-height: 92vh;
  background-color: ${({isL}) => (isL ? '#f9f9f9' : '#0f0f0f')};
  // background: transparent;
  color: ${({isL}) => (!isL ? '#f9f9f9' : '#181818')};
`
export const Ul = styled.ul`
  list-style-type: none;
  padding: 20px 30px;
  // max-height: 55vh;
  max-width: 100%;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
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

  @media (max-width: 768px) {
    height: 250px;
    width: 350px;
  }

  @media (max-width: 480px) {
    height: 200px;
    width: 300px;
  }
`
