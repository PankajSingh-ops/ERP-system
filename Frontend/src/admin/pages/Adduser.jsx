import { useRef } from 'react'
import Header from '../../shared/components/Header'

export default function Adduser() {
 
  const useFname=useRef();
  const useLname=useRef();
  const useAge=useRef();
  const formSubmit=async(event)=>{
    event.preventDefault();
    const Data={
      Firstname:useFname.current.value,
      Lastname:useLname.current.value,
      Age:useAge.current.value

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
    alert(responseText)
  }
  
  
  return (
    <>
      <Header/>
      <form onSubmit={formSubmit}>
      <p>First Name</p>
      <input type="text" name="Firstname"  ref={useFname}  />
      <p>Last name</p>
      <input type="text" name="Lastname"  ref={useLname}/>
      <p>Age</p>
      <input type="Number" name="Age"  ref={useAge}/>
      <button>Click to add</button>
      </form>
    </>
  )
}
