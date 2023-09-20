import { RootReducer } from './index'

export const selectFilteredContacts = (state: RootReducer) => {
  const { contacts } = state.contacts
  const { term } = state.filter

  if (term !== undefined && term.trim() !== '') {
    return contacts.filter((c) =>
      c.name.toLowerCase().includes(term.toLowerCase())
    )
  }
  return contacts
}
