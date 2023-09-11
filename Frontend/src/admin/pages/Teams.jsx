import { useEffect, useState } from 'react'
import styles from './Teams.module.css'
import Header from '../../shared/components/Header'
import { useNavigate } from 'react-router-dom'

export default function Teams() {
    const [products,setTeam]=useState([])
    const [qwerty, setQwert]=useState("")
    const navigate=useNavigate()
    useEffect(()=>{
        const teamsFunction=async()=>{
            const response=await fetch("http://localhost:4000/api/admin/teams")
            if(!response.ok){
                alert("Not full fill")
            }
            const responseText=await response.json()
            // console.log(responseText.data);
            setTeam(responseText.data);

            
        }
        teamsFunction();
    },[qwerty])
    const deleteFunction=async(id)=>{
      console.log(id);
      const response= await fetch(`http://localhost:4000/api/admin/delete/${id}`)
       
      console.log(response);
      if(!response.ok){
        alert("Not deleted something wrong")
      }
      const responseText=await response.json()
      setQwert("yo")
      navigate("/admin/teams")
      alert(responseText.message);


    }
  return (
    <>
    <Header/>
    <div className={styles.main_table}>
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Phone No</th>
        <th>Role</th>
        <th>Delete</th>
      </tr>
      
        {products.map((p)=>{
          return(
          <tr>
            <td>{p.Firstname}</td>
            <td>{p.Lastname}</td>
            <td>{p.Age}</td>
            <td>{p.Email}</td>
            <td>{p.Phone}</td>
            <td>{p.Role}</td>
            <td><svg onClick={()=>{deleteFunction(p._id)}} fill="white" width="30px" height="30px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M50.86,13.38H13a1.5,1.5,0,0,1,0-3H50.86a1.5,1.5,0,0,1,0,3Z"/><path d="M42.4,57.93H21.48a5.5,5.5,0,0,1-5.5-5.5V11.87a1.5,1.5,0,0,1,1.5-1.5H46.4a1.5,1.5,0,0,1,1.5,1.5V52.43A5.51,5.51,0,0,1,42.4,57.93ZM19,13.37V52.43a2.5,2.5,0,0,0,2.5,2.5H42.4a2.5,2.5,0,0,0,2.5-2.5V13.37Z"/><path d="M40,13.37H23.9a1.5,1.5,0,0,1-1.5-1.5V6.57a1.5,1.5,0,0,1,1.5-1.5H40a1.5,1.5,0,0,1,1.5,1.5v5.3A1.5,1.5,0,0,1,40,13.37Zm-14.58-3H38.48V8.07H25.4Z"/><path d="M24.94,47.61a1.5,1.5,0,0,1-1.5-1.5V21.46a1.5,1.5,0,0,1,3,0V46.11A1.5,1.5,0,0,1,24.94,47.61Z"/><path d="M38.94,47.61a1.5,1.5,0,0,1-1.5-1.5V21.46a1.5,1.5,0,0,1,3,0V46.11A1.5,1.5,0,0,1,38.94,47.61Z"/><path d="M31.94,40.38a1.5,1.5,0,0,1-1.5-1.5V28.7a1.5,1.5,0,1,1,3,0V38.88A1.5,1.5,0,0,1,31.94,40.38Z"/></svg></td>
          </tr> 
           )
        })}
      
    </table>
    </div>
    </>
  )
}
