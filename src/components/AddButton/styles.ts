import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Circle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: #1f909a;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;

  @media (max-width: 600px) {
    height: 48px;
    width: 48px;
    bottom: 20px;
    right: 20px;
  }
`

export const Add = styled.img`
  width: 44px;

  @media (max-width: 600px) {
    width: 32px;
  }
`
