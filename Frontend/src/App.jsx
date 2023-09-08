import React from 'react'
import Adduser from './admin/pages/Adduser'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './user/Home'

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
   < Route path='/admin/add-user' element={<Adduser/>} />
   </Routes>
   
   </BrowserRouter>
   

  )
}
