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
import Leaveapplication from './manager/Leaveapplication'
import CalenderDate from './shared/components/CalenderDate'

export default function App() {
  const [isLoggedIn ,setIsLoggesIn]=useState(false)
  const [refresh,setRefresh]=useState("")
  useEffect(()=>{

  },[isLoggedIn,refresh])
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
    setRefresh("refresh")
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
    <Authcontext.Provider value={{token,role,isLoggedIn:!!token,id,
    loginHandler,logoutHandler}}>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Protected><Home/></Protected>} />
   <Route path='/attendence' element={<Protected><Calender/></Protected>}/>
   <Route path='/leave' element={<Protected><Leaves/></Protected>} />
   <Route path='/leave-application' element={<Protected><Leaveapplication/></Protected>} />
   <Route path='/calendar' element={<CalenderDate/>} />

   {/* Admin router  */}
   < Route path='/admin/add-user' element={<Protected> <Adduser/> </Protected> } />
   < Route path='/admin/teams' element={<Protected><Teams/></Protected>} />
   < Route path='/admin/update/:id' element={<Protected><Edituser/></Protected>} />
   <Route path='/profile' element={<Protected><Profile/></Protected>} />
   <Route path='/admin/department' element={<Protected> <Department/> </Protected>} />

   {/* Auth routes  */}
   <Route path='/login' element={<Signin/>} />
  


   </Routes>
   
   </BrowserRouter>
   </Authcontext.Provider>
   

  )
}
