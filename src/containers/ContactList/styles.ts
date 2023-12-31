import styled from 'styled-components'

export const MainContainer = styled.main`
  padding: 40px;
  height: calc(100vh - 200px);
  overflow-y: scroll;

  @media (max-width: 600px) {
    padding: 24px;
    height: calc(100vh - 150px);
  }
`
