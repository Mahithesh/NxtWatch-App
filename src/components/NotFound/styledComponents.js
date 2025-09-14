import styled from 'styled-components'

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
