import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contact from '../../models/Contacts'

type ContactsState = {
  contacts: Contact[]
}

const initialState: ContactsState = {
  contacts: [
    {
      name: 'Kaique Bosco',
      email: 'kaique.bosco@hotmail.com',
      phone: '22 99848-0018',
      id: 1
    },
    {
      name: 'Rafaella',
      email: 'rafaella@outlook.com',
      phone: '22 91234-5678',
      id: 2
    },
    {
      name: 'Mayra',
      email: 'mayra@gmail.com',
      phone: '22 98765-4321',
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
