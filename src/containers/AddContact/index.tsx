import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import InputMask from 'react-input-mask'

import { addContact } from '../../store/reducers/contacts'
import {
  ReturnPage,
  ButtonContainer,
  ButtonRegister,
  Form,
  FormContainer,
  Input,
  SInputMask,
  Title
} from './styles'

const AddContactForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const addNewContact = (e: FormEvent) => {
    e.preventDefault()

    try {
      dispatch(
        addContact({
          name,
          email,
          phone
        })
      )
      navigate('/')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('Ocorreu um erro desconhecido.')
      }
    }
  }

  return (
    <FormContainer>
      <Title>Novo Contato</Title>
      <Form onSubmit={addNewContact}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
          required
        />
        <SInputMask
          mask="(99) 99999-9999"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Telefone"
          type="text"
        />
        <ButtonContainer>
          <ButtonRegister type="submit">Cadastrar</ButtonRegister>
          <ReturnPage onClick={() => navigate('/')}>Cancelar</ReturnPage>
        </ButtonContainer>
      </Form>
    </FormContainer>
  )
}

export default AddContactForm
