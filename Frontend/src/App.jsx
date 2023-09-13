import React from 'react'
import Adduser from './admin/pages/Adduser'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './user/Home'
import Teams from './admin/pages/Teams'
import Profile from './user/Profile'
import Edituser from './admin/pages/Edituser'
import Signin from './auth/pages/Signin'
import Signup from './auth/pages/Signup'

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>} />

   {/* Admin router  */}
   < Route path='/admin/add-user' element={<Adduser/>} />
   < Route path='/admin/teams' element={<Teams/>} />
   < Route path='/admin/update/:id' element={<Edituser/>} />
   <Route path='/profile' element={<Profile/>} />

   {/* Auth routes  */}
   <Route path='/login' element={<Signin/>} />
   <Route path='/signup' element={<Signup/>} />


   </Routes>
   
   </BrowserRouter>
   

  )
}
