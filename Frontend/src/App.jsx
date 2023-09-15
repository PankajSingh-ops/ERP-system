import  { useContext, useMemo, useState } from 'react'
import Adduser from './admin/pages/Adduser'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './user/Home'
import Teams from './admin/pages/Teams'
import Profile from './user/Profile'
import Edituser from './admin/pages/Edituser'
import Signin from './auth/pages/Signin'
import Authcontext from './context/Context'

export default function App() {
  const [isLoggedIn ,setIsLoggesIn]=useState(false)
  const loginHandler=(token)=>{
  localStorage.setItem("token",token)
  setIsLoggesIn(true)
  }
  const logoutHandler=()=>{
    localStorage.removeItem("token");
    setIsLoggesIn(false)
  }
  const token=useMemo(()=>{
  return localStorage.getItem("token")
  },[isLoggedIn])
  // console.log(token);

  return (
    <Authcontext.Provider value={{token,isLoggedIn: !!token,
    loginHandler,logoutHandler}}>
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
  


   </Routes>
   
   </BrowserRouter>
   </Authcontext.Provider>
   

  )
}
