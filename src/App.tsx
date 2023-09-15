// import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle from './styles'
// import store from './store'
import Home from './pages/Home'
// import AddContact from './pages/AddContact'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new-contact',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
