import React from 'react'
import Adduser from './admin/pages/Adduser'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './user/Home'
import Teams from './admin/pages/Teams'
import Profile from './user/Profile'

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
   < Route path='/admin/add-user' element={<Adduser/>} />
   < Route path='/admin/teams' element={<Teams/>} />
   <Route path='/profile' element={<Profile/>} />

   </Routes>
   
   </BrowserRouter>
   

  )
}
