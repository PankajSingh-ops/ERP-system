import React, { useContext, useEffect, useState } from 'react'
import Header from '../shared/components/Header'
import Styles from './Leaveapplication.module.css'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../context/Context'

export default function Leaveapplication() {
  const [tableData,setTableData]=useState([])
  const [changes,setChanges]=useState("")
  const navigate=useNavigate();
  const ctx=useContext(Authcontext)
 
  useEffect(()=>{
  let managerId=ctx.id;
   const getLeaveData=async(id)=>{
   const response=await fetch(`http://localhost:4000/api/admin/leave-application/${id}`)
  //  console.log(response);
  if(!response.ok){
    console.log("error");
  }
   const responseText=await response.json();
   setTableData(responseText.data);
  
   }
   getLeaveData(managerId);
  },[changes])
  const deleteApplication=async(id)=>{
    const leaveResponse=await fetch(`http://localhost:4000/api/admin/delete-leave/${id}`) 
    if(!leaveResponse.ok){
      console.log("there is some proeblme on leave application");
    }
    const leaveText=await leaveResponse.json();
    setChanges("delete")  
  }
  const approveApplication=async(id)=>{
    const approveResponse=await fetch(`http://localhost:4000/api/approve-leave/${id}`)
    if(!approveApplication.ok){
      console.log("Not working");
    }
  }
  return (
    <>
    <Header/>
    <div className={Styles.leave_table}>
      <table>
        <tr><th>Name</th>
        <th>From</th>
        <th>To</th>
        <th>Reason</th>
        <th>Approve Leave</th>
        <th>Denie Leave</th></tr>
        {tableData.map((p)=>{
          return <tr key={p._id}>
          <td>{p.userId}</td>
          <td>{p.fromDate}</td>
          <td>{p.toDate}</td>
          <td>{p.comment}</td>
          {p.approve=="Yes"?(
            <>
            <td>Accepted</td>
            <td>Already</td>
            </>
            
          ):(
            <>
            <td onClick={()=>{approveApplication(p.userId)}}>Approve</td>
          <td onClick={()=>{deleteApplication(p.userId)}}>Reject</td>
            </>
          
          )
          }
        </tr>
        })
        
}
        
        
      </table>
    </div>
      
    </>
  )
}
