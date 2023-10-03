import { useContext, useRef } from 'react'
import Styles from './Signin.module.css'
import { useNavigate } from 'react-router-dom';
import Authcontext from '../../context/Context';

export default function Signin() {
  const useEmail=useRef();
  const usePassword=useRef();
  const navigate=useNavigate();
  const ctx=useContext(Authcontext)
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
    let token=incoming.token;
    let role=incoming.role;
    let id=incoming.userId;
    // console.log(token,role);
    ctx.loginHandler(token,role,id)
    navigate("/")

    }else{
      alert("Not working")
    }

  }
  return (
    <>
   <div className={Styles.main_signin}>
   <form onSubmit={loginSubmit}>
      <h2>Enter email</h2>
      <input type="email" name="Email" ref={useEmail}/>
      <h2>Enter password</h2>
      <input type="text" name="Password" ref={usePassword} />
      <button>Sign In</button>
    </form>
   </div>
   
      </>
  
  )
}
