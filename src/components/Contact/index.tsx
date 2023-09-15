import {
  ContactContainer,
  Name,
  Email,
  Phone,
  ControlDiv,
  ButtonEdit,
  ButtonRemove
} from './styles'

const Contact = () => {
  return (
    <ContactContainer>
      <Name>Contato</Name>
      <Email>contact@example.com</Email>
      <Phone>(00) 00000-0000</Phone>
      <ControlDiv>
        <ButtonEdit type="button">
          <img src="edit.png" alt="Botão para adicionar contato" />
        </ButtonEdit>
        <ButtonRemove type="button">
          <img src="remove.png" alt="Botão para remover contato" />
        </ButtonRemove>
      </ControlDiv>
    </ContactContainer>
  )
}

export default Contact
