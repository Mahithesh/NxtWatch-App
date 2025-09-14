import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Card = styled.li`
  list-style: none;
  width: 350px;
  margin-bottom: 24px;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
  }
`

export const LINK = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  transition: transform 0.2s ease-in-out;

  ${Card}:hover & {
    transform: scale(1.02);
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: inherit;
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  object-fit: cover;
  border: 2px solid transparent;
  transition: border-color 0.2s ease-in-out;

  ${Card}:hover & {
    border-color: rgba(0, 0, 0, 0.1);
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 6px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: inherit;
`

export const ChannelName = styled.p`
  margin: 0 0 4px 0;
  font-size: 12px;
  color: #606060;
  font-weight: 400;
`

export const Meta = styled.p`
  margin: 0;
  font-size: 12px;
  color: #606060;
  font-weight: 400;
  line-height: 1.3;
`
