import { useRef } from 'react'
import Header from '../../shared/components/Header'
import styles from './Signup.module.css'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const useEmail=useRef();
    const usePassword=useRef();
    const useConfirmPassword=useRef();
    const navigate=useNavigate()
     const signupSubmit=async()=>{
        const signupData={
            "Email":useEmail.current.value,
            "Password":usePassword.current.value,
            "CnfPassword":useConfirmPassword.current.value,
        }
     const response=await fetch("http://localhost:4000/api/signup",{
        method:"POST",
        body:JSON.stringify(signupData),
      headers:{
        "Content-Type":"application/json"
      },
     })
     
     const responseText=await response.json()
     if(!response.ok){
      alert("Not submitted")
   }
     console.log(responseText);
     navigate("/login")
     console.log(responseText.message);
    
    
     }
     
    
  return (
    <>
    <Header/>
    <form onSubmit={signupSubmit}>
        <p>Enter your email-</p>
        <input type="text" name="Email" ref={useEmail}/>
        <p>Enter your password-</p>
        <input type="text" name='Password' ref={usePassword}/>
        <p>Again Enter your password-</p>
        <input type="text" name="CnfPassword" ref={useConfirmPassword}/>
        <button>Sign Up</button>
    </form>
      
    </>
  )
}
