import { HeaderContainer, Title, Message, Field } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Lista de contatos</Title>
      <Message>0 contatos encontrados</Message>
      <Field type="text" placeholder="Buscar contato" />
    </HeaderContainer>
  )
}

export default Header
