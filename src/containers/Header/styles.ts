import styled from 'styled-components'

export const Message = styled.p`
  margin-bottom: 16px;
  font-size: 18px;
  color: #f1f0f2;
  font-family: 'Space Mono', monospace;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`

export const Field = styled.input`
  padding: 4px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #666;
  font-family: 'Space Mono', monospace;
  border: none;
  outline: none;
  border-radius: 10px;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 2px;
    line-height: 16px;
  }
`
