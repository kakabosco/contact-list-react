import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contact from '../../models/Contacts'

type ContactsState = {
  contacts: Contact[]
}

const initialState: ContactsState = {
  contacts: [
    {
      name: 'Kaique',
      email: 'kaique.bosco@hotmail.com',
      phone: '(22) 99848-0018',
      id: 1
    },
    {
      name: 'Rafaella',
      email: 'rafaella@outlook.com',
      phone: '(22) 91234-5678',
      id: 2
    },
    {
      name: 'Mayra',
      email: 'mayra@gmail.com',
      phone: '(22) 98765-4321',
      id: 3
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactExists = state.contacts.find(
        (c) =>
          c.name.toLowerCase() === action.payload.name.toLowerCase() ||
          c.email.toLowerCase() === action.payload.email.toLowerCase() ||
          c.phone === action.payload.phone
      )

      if (contactExists) {
        if (
          contactExists.name.toLowerCase() === action.payload.name.toLowerCase()
        ) {
          throw new Error('Nome já cadastrado')
        }
        if (
          contactExists.email.toLowerCase() ===
          action.payload.email.toLowerCase()
        ) {
          throw new Error('E-mail já cadastrado')
        }
        if (contactExists.phone === action.payload.phone) {
          throw new Error('Telefone já cadastrado')
        }
      } else {
        const lastContact = state.contacts[state.contacts.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.contacts.push(newContact)
      }
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      )
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      )
      if (index !== -1) {
        state.contacts[index] = action.payload
      }
    }
  }
})

export const { addContact, removeContact, updateContact } =
  contactsSlice.actions
export default contactsSlice.reducer
