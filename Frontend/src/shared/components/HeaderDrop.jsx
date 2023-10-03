import { useNavigate } from 'react-router-dom'
import styles from './HeaderDrop.module.css'
import { useContext } from 'react';
import Authcontext from '../../context/Context';

export default function HeaderDrop() {
  const navigate=useNavigate();
  const ctx=useContext(Authcontext)
  return (
    <div className={styles.dropdown_main}>
      <h3><u>Main</u> </h3>
      <p onClick={()=>navigate("/")}>Dashboard</p>
      <p>Profile</p>
      {ctx.role=="Admin"?(
        <>
        <h3><u>Admin Section</u></h3>
        <p onClick={()=>navigate("/admin/add-user")}>Add User</p>
        <p onClick={()=>navigate("/admin/teams")}>All Users</p>
        <p onClick={()=>navigate("/admin/department")}>Add Department</p>
        </>
      

       ):ctx.role=="Manager"?(
      <>
      <h3><u>Manager Section</u></h3>
      <p>Add Employee</p>
      <p>All Employees</p>
      <p onClick={()=>{navigate("/leave-application")}}>Leave Application</p>
      </>
      
       ):(
      <>
      <h3><u>Employee SEction</u></h3>
      <p>All Employess</p>
      <p>Projects</p>
      </>
      
       )
}
      <h3><u>Other</u></h3>
      <p onClick={()=>navigate("/calender")}>Attendence</p>
      <p>Calender</p>
      <p onClick={()=>navigate("/leave")}>Leaves</p>
      <p>Activities</p>

      {ctx.isLoggedIn?(
      <p onClick={ctx.logoutHandler}>Logout</p>):(
        <p onClick={()=>navigate('/login')}>Login</p>
      )
      }
    </div>
  )
}
