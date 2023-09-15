import styled from 'styled-components'

export const ContactContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 32px;
  padding: 24px;
  max-width: 500px;
  border-radius: 16px;
  background-color: #a7d4d7;

  @media (max-width: 600px) {
    max-width: 300px;
  }
`

export const Name = styled.h3`
  margin-bottom: 12px;
  color: #04535d;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

export const Email = styled.p`
  margin-bottom: 8px;
  color: #0e8291;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`

export const Phone = styled.p`
  color: #0e8291;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`

export const ControlDiv = styled.div`
  position: relative;
  bottom: 80px;
  left: 420px;
  margin-bottom: -96px;
  display: flex;
  flex-direction: column;
  max-width: 32px;

  @media (max-width: 600px) {
    left: 220px;
  }
`

export const ButtonEdit = styled.button`
  margin-bottom: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20%;
  background-color: #519d50;
  cursor: pointer;

  img {
    width: 50%;
  }
`

export const ButtonRemove = styled(ButtonEdit)`
  background-color: #d76565;
`
