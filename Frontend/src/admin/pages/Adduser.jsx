import { useRef } from 'react'
import Header from '../../shared/components/Header'
import styles from './Adduser.module.css'
import { useNavigate } from 'react-router-dom';

export default function Adduser() {
  const navigate=useNavigate();
 
  const useFname=useRef();
  const useLname=useRef();
  const useAge=useRef();
  const useEmail=useRef();
  const usePhone=useRef();
  const useRole=useRef();
  const formSubmit=async(event)=>{
    event.preventDefault();
    const Data={
      Firstname:useFname.current.value,
      Lastname:useLname.current.value,
      Email:useEmail.current.value,
      Phone:usePhone.current.value,
      Age:useAge.current.value,
      Role:useRole.current.value



    }
    const response=await fetch("http://localhost:4000/api/admin/add-user",{
      method:"POST",
      body:JSON.stringify(Data),
      headers:{
        "Content-Type":"application/json"
      },
    })
    if(!response.ok){
      return alert("Invalid add user")
    }
    const responseText=await response.json();
   
    navigate("/admin/teams")
    alert("Added Successfully")
  }
  
  
  return (
    <>
      <Header/>
      <form onSubmit={formSubmit}>
      <p>First Name</p>
      <input type="text" name="Firstname"  ref={useFname}  />
      <p>Last Name</p>
      <input type="text" name="Lastname"  ref={useLname}/>
      <p>Email Address</p>
      <input type="email" name="Email" ref={useEmail} />
      <p>Contact No</p>
      <input type="number" name="Phone" ref={usePhone}/>
      <p>Age</p>
      <input type="Number" name="Age"  ref={useAge}/>
      <p>Select Role</p>
      <select name="Role" id="" ref={useRole}>
       <option value="Admin">Admin</option>
       <option value="Manager">Manager</option>
       <option value="Employee">Employee</option>
      </select>
      <button>Add</button>
      </form>
    </>
  )
}
