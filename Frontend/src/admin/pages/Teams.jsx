import { useEffect, useState } from 'react'
import styles from './Teams.module.css'
import Header from '../../shared/components/Header'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'



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
    const styleEditor=(id)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
           
          )
          deleteFunction(id)
        }
      })
     
    }
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
     


    }
    const editFunction=async(id)=>{
      navigate(`/admin/update/${id}`)
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
        <th>Edit</th>
      </tr>
      
        {products.map((p)=>{
          return(
          <tr key={p._id}>
      
            <td>{p.Firstname}</td>
            <td>{p.Lastname}</td>
            <td>{p.Age}</td>
            <td>{p.Email}</td>
            <td>{p.Phone}</td>
            <td>{p.Role}</td>
            <td><svg onClick={()=>{styleEditor(p._id)}} fill="white" width="30px" height="30px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M50.86,13.38H13a1.5,1.5,0,0,1,0-3H50.86a1.5,1.5,0,0,1,0,3Z"/><path d="M42.4,57.93H21.48a5.5,5.5,0,0,1-5.5-5.5V11.87a1.5,1.5,0,0,1,1.5-1.5H46.4a1.5,1.5,0,0,1,1.5,1.5V52.43A5.51,5.51,0,0,1,42.4,57.93ZM19,13.37V52.43a2.5,2.5,0,0,0,2.5,2.5H42.4a2.5,2.5,0,0,0,2.5-2.5V13.37Z"/><path d="M40,13.37H23.9a1.5,1.5,0,0,1-1.5-1.5V6.57a1.5,1.5,0,0,1,1.5-1.5H40a1.5,1.5,0,0,1,1.5,1.5v5.3A1.5,1.5,0,0,1,40,13.37Zm-14.58-3H38.48V8.07H25.4Z"/><path d="M24.94,47.61a1.5,1.5,0,0,1-1.5-1.5V21.46a1.5,1.5,0,0,1,3,0V46.11A1.5,1.5,0,0,1,24.94,47.61Z"/><path d="M38.94,47.61a1.5,1.5,0,0,1-1.5-1.5V21.46a1.5,1.5,0,0,1,3,0V46.11A1.5,1.5,0,0,1,38.94,47.61Z"/><path d="M31.94,40.38a1.5,1.5,0,0,1-1.5-1.5V28.7a1.5,1.5,0,1,1,3,0V38.88A1.5,1.5,0,0,1,31.94,40.38Z"/></svg></td>
            <td><svg onClick={()=>{editFunction(p._id)}} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z" fill="white"/>
</svg></td>
          </tr> 
           )
        })}
      
    </table>
    </div>
    </>
  )
}
