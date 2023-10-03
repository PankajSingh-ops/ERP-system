import { useEffect, useRef, useState } from 'react'
import Header from '../../shared/components/Header';

export default function Department() {
const useDepartmnet=useRef();
const useManager=useRef()
const[isManager,setIsManager]=useState([])
const [isEmployee,setIsEmplpyee]=useState([])

const [selectedEmployees, setSelectedEmployees] = useState([]);
const handleCheckboxChange = (employee) => {
   
   const isSelected = selectedEmployees.some((emp) => emp._id === employee._id);

   if (isSelected) {
     setSelectedEmployees(selectedEmployees.filter((emp) => emp._id !== employee._id));
   } else {
     setSelectedEmployees([...selectedEmployees, employee]);
   }
 };
 useEffect(()=>{
    const managerFunction=async()=>{
     const managerRespone=await fetch("http://localhost:4000/api/admin/manager")
     if(!managerRespone.ok){
        alert("Not working manager")
     }
    const newManager=await managerRespone.json();
    setIsManager(newManager.data);
    }
    const employeeFunction=async()=>{
     const employeeResponse=await fetch("http://localhost:4000/api/admin/employee")
     if(!employeeResponse.ok){
        alert("Employe function not working")
     }
     const newEmployee=await employeeResponse.json();
     setIsEmplpyee(newEmployee.data)
    }
    managerFunction()
    employeeFunction()
 },[])
 const departmentFunction=async(event)=>{
   
    const Data={
        department:useDepartmnet.current.value,
        manager:useManager.current.value,
        employee:selectedEmployees,

    }
    
    event.preventDefault();
    const response=await fetch("http://localhost:4000/api/admin/department",{
        method:"POST",
        headers: {
        'Content-Type': 'application/json',
      },
        body:JSON.stringify(Data)
    })
    if(!response.ok){
        alert("Not working")
    }

 }
 

  return (
    <>
    <Header/>
    <form onSubmit={departmentFunction}>
     <h2>Department</h2>
     <input type="text" name="Department" ref={useDepartmnet} />
     <h2>Manager</h2>
     <select name="manager" id="" ref={useManager}>

        {isManager.map((p)=>{
            return <>
            <option value={p._id} >{p.Firstname}</option>
            </> 
        })}
     </select>
     <h4>Employee section</h4>
     {isEmployee.map((p)=>{
        return <li key={p._id}>
        <input type="checkbox" name="Employee" value={p._id}    onChange={() => handleCheckboxChange(p)}
                checked={selectedEmployees.some((emp) => emp._id === p._id)} />
        <span>{p.Firstname}</span></li>
        
     })}
     <button>Add</button>
    </form>
    </>
  )
}
