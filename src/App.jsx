import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Perfil from './Pages/Perfil/Perfil'
import Contato from './Pages/Contato/Contato'
import Header from './Components/Header/Header'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'

import './App.css'



function App() {

  const { isLoggedIn } = useContext(AuthContext)

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='login' exact element={<Login />} />
          <Route path='perfil' element={<Perfil />} />
          <Route path='contato' element={<Contato />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
