import { useDispatch, useSelector } from 'react-redux'

import { selectFilteredContacts } from '../../store/selectors'
import { RootReducer } from '../../store'
import { HeaderContainer, Title } from '../../styles'
import { Message, Field } from './styles'
import { changeTerm } from '../../store/reducers/filter'

const Header = () => {
  const dispatch = useDispatch()
  const fContacts = useSelector(selectFilteredContacts)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const showsFilterResult = (quantity: number) => {
    return quantity === 0
      ? 'Nenhum contato encontrado'
      : `${quantity} contatos encontrados`
  }

  const message = showsFilterResult(fContacts.length)

  return (
    <HeaderContainer>
      <Title>Lista de contatos</Title>
      <Message>{message}</Message>
      <Field
        type="text"
        placeholder="Buscar contato"
        value={term}
        onChange={(e) => dispatch(changeTerm(e.target.value))}
      />
    </HeaderContainer>
  )
}

export default Header
