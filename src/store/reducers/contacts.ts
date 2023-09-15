import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contact from '../../models/Contacts'

type ContactsState = {
  contacts: Contact[]
}

const initialState: ContactsState = {
  contacts: [
    {
      name: 'Contato 1',
      email: 'contato1@example.com',
      phone: '00 00000-0000',
      id: 1
    },
    {
      name: 'Contato 2',
      email: 'contato2@example.com',
      phone: '00 00000-0000',
      id: 2
    },
    {
      name: 'Contato 3',
      email: 'contato3@example.com',
      phone: '00 00000-0000',
      id: 3
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      const contactExists = state.contacts.some(
        (contact) =>
          contact.name === action.payload.name &&
          contact.email === action.payload.email &&
          contact.phone === action.payload.phone
      )

      if (!contactExists) {
        state.contacts.push(action.payload)
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
