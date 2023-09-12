import React, { useEffect, useRef, useState } from 'react'
import Header from '../../shared/components/Header'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edituser() {
  // const[updateData,setUpdateData]=useState([])
  const [userId,setUserId]=useState("")
  const[fname,setFname]=useState("")
  const[lname,setLname]=useState("")
  const[age,setAge]=useState("")
  const[emails,setEmail]=useState("")
  const[phones,setPhone]=useState("")
  const[roles,setRole]=useState("")
  // alert(userId)
  const navigate=useNavigate();
  const useFname=useRef();
  const useLname=useRef();
  const useAge=useRef();
  const useEmail=useRef();
  const usePhone=useRef();
  const useRole=useRef();
  let {id}=useParams()
  
  useEffect(()=>{
    const updateFunction=async()=>{
      
     const response=await fetch(`http://localhost:4000/api/admin/update/${id}`)
     if(!response.ok){
      alert("Not received")
     }
     const responseText=await response.json()
     setUserId(responseText.data._id)
     setFname(responseText.data.Firstname)
     setLname(responseText.data.Lastname)
     setEmail(responseText.data.Email)
     setAge(responseText.data.Age)
     setPhone(responseText.data.Phone)
     setRole(responseText.data.Role)
    }
    updateFunction()
  },[])
 
  
  const postUpdate=async(event)=>{
    event.preventDefault();
    const Data={
      Firstname:useFname.current.value,
      Lastname:useLname.current.value,
      Email:useEmail.current.value,
      Phone:usePhone.current.value,
      Age:useAge.current.value,
      Role:useRole.current.value



    }
    const response=await fetch(`http://localhost:4000/api/admin/update/${id}`,{
      method:"PUT",
      body:JSON.stringify(Data),
      headers:{
        "Content-Type":"application/json"
      },
    })
    if(!response.ok){
      alert("Not updated")
    }
    const responseText=await response.json()
    console.log(responseText);
    navigate("/admin/teams")
    alert(responseText.message)

  }
  const changeHandler=async(e,name)=>{
    if("Firstname"===name){
      setFname(e)
    }
    else if("Lastname"===name){
      setLname(e)
    }
    else if("Email"===name){
      setEmail(e)
    }
    else if("Age"===name){
      setAge(e)
    }
    else if("Phone"===name){
      setPhone(e)
    }
    else{
      setRole(e)
    }
   
  }
  
  
  return (
    <div>
        <Header/>
      <form onSubmit={postUpdate} method='post'>
       <p>{userId}</p>
      <p>First Name</p>
      <input type="text" name="Firstname" value={fname} onChange={(event)=>{changeHandler(event.target.value,"Firstname")}} ref={useFname}  />
      <p>Last Name</p>
      <input type="text" name="Lastname" value={lname} onChange={(event)=>{changeHandler(event.target.value,"Lastname")}}  ref={useLname}    />
      <p>Email Address</p>
      <input type="email" name="Email" value={emails} onChange={(event)=>{changeHandler(event.target.value,"Email")}} ref={useEmail}  />
      <p>Contact No</p>
      <input type="number" name="Phone" value={phones} onChange={(event)=>{changeHandler(event.target.value,"Phone")}} ref={usePhone} />
      <p>Age</p>
      <input type="Number" name="Age" value={age} onChange={(event)=>{changeHandler(event.target.value,"Age")}} ref={useAge} />
      <p>Select Role</p>
      <select name="Role" id="" value={roles} onChange={(event)=>{changeHandler(event.target.value,"Role")}} ref={useRole}>
       <option value="Admin">Admin</option>
       <option value="Manager">Manager</option>
       <option value="Employee">Employee</option>
      </select>
      <button >Add</button>
      </form>
    </div>
  )
}
