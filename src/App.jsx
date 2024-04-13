
import {  Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Orders from './Pages/Orders'

function App() {
 

  return (
    <>
      <Routes>
      <Route path='/' element={< Home />} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup />}/>
      <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </>
  )
}

export default App
