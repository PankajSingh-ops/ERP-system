import { useEffect, useState } from 'react'
import styles from './Teams.module.css'
import Header from '../../shared/components/Header'

export default function Teams() {
    const [products,setTeam]=useState([])
    useEffect(()=>{
        const teamsFunction=async()=>{
            const response=await fetch("http://localhost:4000/api/admin/teams")
            if(!response.ok){
                alert("Not full fill")
            }
            const responseText=await response.json()
            console.log(responseText.data);
            setTeam(responseText.data);

            
        }
        teamsFunction();
    },[])
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
      </tr>
      
        {products.map((p)=>{
          return( <tr>
            <td>{p.Firstname}</td>
            <td>{p.Lastname}</td>
            <td>{p.Age}</td>
            <td>{p.Email}</td>
            <td>{p.Phone}</td>
            <td>{p.Role}</td>
          </tr> 
           )
        })}
      
    </table>
    </div>
    </>
  )
}
