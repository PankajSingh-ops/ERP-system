import  { useContext, useEffect, useRef, useState } from 'react'
import Header from '../shared/components/Header';
import Styles from './Calender.module.css'
import Authcontext from '../context/Context';

export default function Calender() {
    const ctx=useContext(Authcontext)
    const [min,setminDate]=useState("")
    
    const [attendence,setAttendence]=useState("")
   
    const useData=useRef()
    useEffect(()=>{
        const minDate = () => {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
            const day = String(currentDate.getDate()).padStart(2, '0'); 
          
            const formattedDate = `${year}-${month}-${day}`;
            setminDate(formattedDate);
        }
       
        minDate();
    },[min])
    const attendenceStatus=(value)=>{
      setAttendence(value)
    }
    const formSubmit=async(event)=>{
    event.preventDefault();
    const data={
        date:useData.current.value,
        attendence:attendence,
        userId:ctx.id,

    }
    console.log(data);
       const response=await fetch("http://localhost:4000/api/admin/calender",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify(data)
       })
       console.log(response);
    }
  return (
    <>
      <Header/>
      <div className={Styles.div_main}>
      <form className={Styles.form} >
        <h3>Mark Your today's Attendence, Make sure mark on time otherwise you will be mark as Absent...</h3>
        <input type="date" name="date" min={min} max={min}  ref={useData} />
        <div className={Styles.attendence_button}>
        <div className={Styles.buttons} onClick={()=>{attendenceStatus("PRESENT")}}>Present</div>
        <div className={Styles.buttons} onClick={()=>{attendenceStatus("ABSENT")}}>Absent</div>

        </div>
        
        <button onClick={formSubmit}>submit</button>
      </form>
      </div>
      
    </>
  )
}
