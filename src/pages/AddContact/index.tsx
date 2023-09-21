import AddContactForm from '../../containers/AddContact'
import { HeaderContainer, Title } from '../../styles'

const AddContact = () => {
  return (
    <>
      <HeaderContainer>
        <Title>Adicionar contato</Title>
      </HeaderContainer>
      <AddContactForm />
    </>
  )
}

export default AddContact
