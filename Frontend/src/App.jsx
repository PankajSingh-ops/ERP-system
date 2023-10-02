import  { useContext, useEffect, useMemo, useState } from 'react'
import Adduser from './admin/pages/Adduser'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './user/Home'
import Teams from './admin/pages/Teams'
import Profile from './user/Profile'
import Edituser from './admin/pages/Edituser'
import Signin from './auth/pages/Signin'
import Authcontext from './context/Context'
import Protected from './util/Protected'
import Department from './admin/pages/Department'
import Calender from './user/Calender'
import Leaves from './user/Leaves'

export default function App() {
  const [isLoggedIn ,setIsLoggesIn]=useState(false)
  useEffect(()=>{

  },[])
  const loginHandler=(token,role,id)=>{
  localStorage.setItem("token",token) 
  localStorage.setItem("role",role)
  localStorage.setItem("id",id)
  setIsLoggesIn(true)
  }
  const logoutHandler=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("role")
    localStorage.removeItem("id")
    setIsLoggesIn(false)
  }
  const token=useMemo(()=>{
  return localStorage.getItem("token")
  },[isLoggedIn])
  const role=useMemo(()=>{
    return localStorage.getItem("role")
  },[isLoggedIn])
  const id=useMemo(()=>{
    return localStorage.getItem("id")
  },[isLoggedIn])
  

  return (
    <Authcontext.Provider value={{token,role,isLoggedIn,id,
    loginHandler,logoutHandler}}>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/calender' element={<Calender/>}/>
   <Route path='/leave' element={<Leaves/>} />

   {/* Admin router  */}
   < Route path='/admin/add-user' element={<Protected> <Adduser/> </Protected> } />
   < Route path='/admin/teams' element={<Teams/>} />
   < Route path='/admin/update/:id' element={<Edituser/>} />
   <Route path='/profile' element={<Profile/>} />
   <Route path='/admin/department' element={<Protected> <Department/> </Protected>} />

   {/* Auth routes  */}
   <Route path='/login' element={<Signin/>} />
  


   </Routes>
   
   </BrowserRouter>
   </Authcontext.Provider>
   

  )
}
