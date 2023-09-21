import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    list-style: none;
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #1f909a;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  @media (max-width: 600px) {
    padding: 24px;
  }
`

export const Title = styled.h1`
  margin-bottom: 8px;
  font-size: 32px;
  color: #f1f0f2;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`

export default GlobalStyle
