import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from '../shared/components/Header'
import Authcontext from '../context/Context';

export default function Leaves() {
    const useStart=useRef();
    const useTo=useRef();
    const useComment=useRef();
    const ctx=useContext(Authcontext)
    const [min,setminDate]=useState("")
    useEffect(()=>{
        const minDate = () => {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
            const day = String(currentDate.getDate()+1).padStart(2, '0'); 
          
            const formattedDate = `${year}-${month}-${day}`;
            setminDate(formattedDate);
        }
       
        minDate();
    },[min])
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
    </>
  )
}
