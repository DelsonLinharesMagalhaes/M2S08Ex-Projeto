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
          <Route path='/login' exact element={!isLoggedIn ? <Login /> : <Navigate to='/home' />} />
          <Route path='/' exact element={isLoggedIn ? <Home /> : <Navigate to='/login' />} />
          <Route path='/login' exact element={isLoggedIn ? <Login /> : <Navigate to='/login' />} />
          <Route path='/home' element={isLoggedIn ? <Home /> : <Navigate to='/login' />} />
          <Route path='/perfil' element={isLoggedIn ? <Perfil /> : <Navigate to='/login' />} />
          <Route path='/contato' element={isLoggedIn ? <Contato /> : <Navigate to='/login' />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
