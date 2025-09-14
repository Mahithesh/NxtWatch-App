import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const Tabdiv = styled.div`
  min-width: 280px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 92vh;
  background: ${({isL}) => (isL ? 'white' : '#212121')};
  color: ${({isL}) => (!isL ? '#f9f9f9' : '#181818')};

  .conc {
    padding: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const Img = styled.img`
  height: 50px;
  width: 50px;
  padding: 5px;
`

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
export const Li = styled.li`
  margin: 0;
  background: ${({isl, isc}) => {
    if (isl) {
      return isc ? '#f1f5f9' : ''
    }
    return isc ? '#383838' : ''
  }};
  padding: 5px 10px;
  min-width: 100%;
`

export const L = styled(Link)`
  text-decoration: none;
`
