import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Card = styled.li`
  list-style: none;
  width: 300px;
  // height: 300px;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 0px;

  // img{
  //   height: 250px;
  //   width: 200px;
  // }
`

export const LINK = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
`

export const Thumbnail = styled.img`
  width: 300px;
  // border-radius: 8px;
  margin-bottom: 8px;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0 20px;
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 5px 0;
  line-height: 1.4;
`

export const ChannelName = styled.p`
  margin: 0;
  font-size: 12px;
`

export const Meta = styled.p`
  margin: 0;
  font-size: 12px;
`
