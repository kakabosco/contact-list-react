import { useSelector } from 'react-redux'

import Contact from '../../components/Contact'
import { selectFilteredContacts } from '../../store/selectors'
import { MainContainer } from './styles'

const ContactList = () => {
  const fContacts = useSelector(selectFilteredContacts)

  return (
    <MainContainer>
      <ul>
        {fContacts.map((c) => (
          <li key={c.name}>
            <Contact name={c.name} email={c.email} phone={c.phone} id={c.id} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
export default ContactList
