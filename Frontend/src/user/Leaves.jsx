import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from '../shared/components/Header'
import Authcontext from '../context/Context';
import Styles from './Leaves.module.css'

export default function Leaves() {
    const useStart=useRef();
    const useTo=useRef();
    const useComment=useRef();
    const ctx=useContext(Authcontext)
    const [min,setminDate]=useState("")
    const [leaveData,setLeaveData]=useState([])
    const [refresh,setRefresh]=useState("")
    useEffect(()=>{
        const minDate = () => {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
            const day = String(currentDate.getDate()+1).padStart(2, '0'); 
          
            const formattedDate = `${year}-${month}-${day}`;
            setminDate(formattedDate);
        }
        const leaveStatus=async(id)=>{
        const status=await fetch(`http://localhost:4000/api/leave-status/${id}`)
        if(!status.ok){
          console.log("No leaves");
        }
        const leaveResponnse=await status.json();
        setLeaveData(leaveResponnse.data)

        }
        leaveStatus(ctx.id);
       
        minDate();
    },[min,leaveData])
    const leaveSubmit=async(event)=>{
         event.preventDefault();
         const data={
            id:ctx.id,
            start:useStart.current.value,
            end:useTo.current.value,
            comment:useComment.current.value,
            approve:"No",
         }
         const response=await fetch("http://localhost:4000/api/admin/leave",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
         })
         if(!response.ok){
          console.log("there is an error in fetching leave data");
         }
         setRefresh("Hogya")

    }
  return (
    <>
     <Header/> 
     <form onSubmit={leaveSubmit}>
        <h3>Select your From and To date..</h3>
        <input type="date" name="From" min={min} ref={useStart} />
        <input type="date" name='To' min={min} ref={useTo}/>
        <input type="text-area" name="Reason" ref={useComment}/>
        <button>Apply</button>
     </form>
     <table className={Styles.leavetable}>
      <tr>
        <th>Name</th>
        <th>From</th>
        <th>To</th>
        <th>Reason</th>
        <th>Leave Status</th>
      </tr>
      {leaveData.map((p)=>{
        return <tr key={p._id}>
          <td>{p.Name}</td>
          <td>{p.fromDate}</td>
          <td>{p.toDate}</td>
          <td>{p.comment}</td>
          {p.approve=="Yes"?(<td>Approve</td>):(<td>Pending</td>)}
        </tr>
      })

      }
     </table>
    </>
  )
}
