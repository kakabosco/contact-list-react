import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { removeContact, updateContact } from '../../store/reducers/contacts'
import ContactClass from '../../models/Contacts'
import {
  ContactContainer,
  Name,
  Email,
  Phone,
  ControlDiv,
  ButtonEdit,
  ButtonRemove,
  ButtonSave,
  ButtonCancel
} from './styles'

type Props = ContactClass

const Contact = ({ name, email, phone, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')

  useEffect(() => {
    if (name.length > 0 && email.length > 0 && phone.length > 0) {
      setNameValue(name)
      setEmailValue(email)
      setPhoneValue(phone)
    }
  }, [name, email, phone])

  const cancelEditing = () => {
    setIsEditing(false)
    setNameValue(name)
    setEmailValue(email)
    setPhoneValue(phone)
  }

  return (
    <ContactContainer>
      <Name
        disabled={!isEditing}
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <Email
        disabled={!isEditing}
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <Phone
        disabled={!isEditing}
        value={phoneValue}
        onChange={(e) => setPhoneValue(e.target.value)}
      />
      <ControlDiv>
        {isEditing ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  updateContact({
                    name: nameValue,
                    email: emailValue,
                    phone: phoneValue,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              <img src="save.png" alt="Confirmar edição" />
            </ButtonSave>
            <ButtonCancel onClick={cancelEditing}>
              <img src="cancel.png" alt="Cancelar edição" />
            </ButtonCancel>
          </>
        ) : (
          <>
            <ButtonEdit onClick={() => setIsEditing(true)}>
              <img src="edit.png" alt="Editar contato" />
            </ButtonEdit>
            <ButtonRemove onClick={() => dispatch(removeContact(id))}>
              <img src="remove.png" alt="Remover contato" />
            </ButtonRemove>
          </>
        )}
      </ControlDiv>
    </ContactContainer>
  )
}

export default Contact
