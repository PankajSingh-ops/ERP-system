import React, { useRef } from 'react'
import Header from '../../shared/components/Header'
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const useEmail=useRef();
  const usePassword=useRef();
  const navigate=useNavigate();
  const loginSubmit=async(event)=>{
    event.preventDefault();
    const data={
      "Email":useEmail.current.value,
      "Password":usePassword.current.value,
    }
    // console.log(data);

    const response=await fetch("http://localhost:4000/api/login",{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      },
    })
    // console.log(response);
    if(response){
    const incoming= await response.json()
    console.log(incoming);
    navigate("/")

    }else{
      alert("Not working")
    }

  }
  return (
    <>
    <Header/>
    <form onSubmit={loginSubmit}>
      <p>Enter email</p>
      <input type="email" name="Email" ref={useEmail}/>
      <p>Enter password</p>
      <input type="text" name="Password" ref={usePassword} />
      <button>Sign In</button>
    </form>
      </>
  
  )
}
