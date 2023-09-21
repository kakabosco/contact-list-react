import styled from 'styled-components'
import InputMask from 'react-input-mask'
import { Link } from 'react-router-dom'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 80px;
  max-width: 360px;
  width: 100%;
  padding: 48px;
  background-color: #a7d4d7;
  border-radius: 20px;

  @media (max-width: 600px) {
    padding: 32px;
    margin-top: 60px;
    max-width: 300px;
  }
`

export const Title = styled.h2`
  margin-bottom: 32px;
  padding-bottom: 4px;
  text-transform: uppercase;
  color: #04535d;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 12px;
  color: #666;
  border-radius: 8px;
  border: 2px solid #04535d;
  outline: none;
  font-family: 'Space Mono', monospace;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`

export const SInputMask = styled(InputMask)`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 24px;
  color: #666;
  border-radius: 8px;
  border: 2px solid #04535d;
  outline: none;
  font-family: 'Space Mono', monospace;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    gap: 8px;
  }
`

export const ButtonRegister = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border: none;
  border-radius: 12px;
  color: #f1f0f2;
  font-size: 14px;
  font-weight: bold;
  background-color: #519d50;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`

export const ReturnPage = styled(Link).attrs({ as: ButtonRegister })`
  background-color: #d76565;
`
