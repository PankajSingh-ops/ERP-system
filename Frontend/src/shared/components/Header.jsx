import React, { useContext, useEffect, useState } from 'react'
import styles from './Header.module.css'
import Searchheader from './Searchheader'
import HeaderDrop from './HeaderDrop'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../../context/Context'


export default function Header() {
  const nav=useNavigate()
  const [bell,setBell]=useState([])
  const [bellDrop,setBellDrop]=useState(false)
  const [navDown,setNavDown]=useState(false)
  const bellClick=()=>{
    setNavDown(!navDown)
  }
  const ctx=useContext(Authcontext)
  useEffect(()=>{
  const notification=async(id)=>{
    // console.log(id);
    const bellResponse=await fetch(`http://localhost:4000/api/notification/${id}`)
    if(!bellResponse.ok){
      console.log("Notification is not working");
    }
    const receiveResponse=await bellResponse.json()
    setBell(receiveResponse.data);
    setBellDrop(true)

  }
  notification(ctx.id)
  },[bell])
  return (
    <>
    <div className={styles.main_header}>
     <div className={styles.logo_header}><img src="../logo.png" alt="" /></div>
     <div className={styles.settings_header}><svg width="30px" height="30px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M12 7.82001H22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2 7.82001H4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20 16.82H22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2 16.82H12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 11.82C10.2091 11.82 12 10.0291 12 7.82001C12 5.61087 10.2091 3.82001 8 3.82001C5.79086 3.82001 4 5.61087 4 7.82001C4 10.0291 5.79086 11.82 8 11.82Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16 20.82C18.2091 20.82 20 19.0291 20 16.82C20 14.6109 18.2091 12.82 16 12.82C13.7909 12.82 12 14.6109 12 16.82C12 19.0291 13.7909 20.82 16 20.82Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg></div>
     <div className={styles.category_header}>
      <div className={`${styles.dashboard_header} ${styles.hover_header}`}>Dashboard</div>
      <div className={`${styles.team_header} ${styles.hover_header}`}>Team</div>
      <div className={` ${styles.projects_header} ${styles.hover_header}`}>Projects</div>
      <div className={` ${styles.calender_header} ${styles.hover_header}`} onClick={()=>nav('/calendar')}>Calender</div>
     </div>
     <div className={styles.gap}></div>
     <div className={styles.search_div}>
     <Searchheader/>
     </div>
     <div className={styles.last_icons}>
      <div className={styles.users_edit}><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="white"/>
<path d="M14.0809 14.1489C11.2909 12.2889 6.74094 12.2889 3.93094 14.1489C2.66094 14.9989 1.96094 16.1489 1.96094 17.3789C1.96094 18.6089 2.66094 19.7489 3.92094 20.5889C5.32094 21.5289 7.16094 21.9989 9.00094 21.9989C10.8409 21.9989 12.6809 21.5289 14.0809 20.5889C15.3409 19.7389 16.0409 18.5989 16.0409 17.3589C16.0309 16.1289 15.3409 14.9889 14.0809 14.1489Z" fill="white"/>
<path d="M19.9894 7.33815C20.1494 9.27815 18.7694 10.9781 16.8594 11.2081C16.8494 11.2081 16.8494 11.2081 16.8394 11.2081H16.8094C16.7494 11.2081 16.6894 11.2081 16.6394 11.2281C15.6694 11.2781 14.7794 10.9681 14.1094 10.3981C15.1394 9.47815 15.7294 8.09815 15.6094 6.59815C15.5394 5.78815 15.2594 5.04815 14.8394 4.41815C15.2194 4.22815 15.6594 4.10815 16.1094 4.06815C18.0694 3.89815 19.8194 5.35815 19.9894 7.33815Z" fill="white"/>
<path d="M21.9883 16.5904C21.9083 17.5604 21.2883 18.4004 20.2483 18.9704C19.2483 19.5204 17.9883 19.7804 16.7383 19.7504C17.4583 19.1004 17.8783 18.2904 17.9583 17.4304C18.0583 16.1904 17.4683 15.0004 16.2883 14.0504C15.6183 13.5204 14.8383 13.1004 13.9883 12.7904C16.1983 12.1504 18.9783 12.5804 20.6883 13.9604C21.6083 14.7004 22.0783 15.6304 21.9883 16.5904Z" fill="white"/>
</svg></div>
      <div className={styles.bell_icon} onClick={bellClick}>{bellDrop?(<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Communication / Bell_Notification"> <path id="Vector" d="M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17.0001M15 17L9 17.0001M15 17H19C19.5523 17 20 16.5523 20 16V15.4141C20 15.1489 19.8945 14.8946 19.707 14.707L19.1963 14.1963C19.0706 14.0706 19 13.9 19 13.7222V10C19 9.82357 18.9936 9.64855 18.9805 9.4761M9 17.0001L5 17.0001C4.44772 17.0001 4 16.5521 4 15.9998V15.4141C4 15.1489 4.10544 14.8949 4.29297 14.7073L4.80371 14.1958C4.92939 14.0701 5 13.9002 5 13.7224V9.99998C5 6.13401 8.134 3 12 3C12.7116 3 13.3984 3.10618 14.0454 3.30357M18.9805 9.4761C20.1868 8.7873 21 7.48861 21 6C21 3.79086 19.2091 2 17 2C15.8298 2 14.7769 2.50253 14.0454 3.30357M18.9805 9.4761C18.3966 9.80949 17.7205 10 17 10C14.7909 10 13 8.20914 13 6C13 4.9611 13.3961 4.0147 14.0454 3.30357M18.9805 9.4761C18.9805 9.47609 18.9805 9.4761 18.9805 9.4761ZM14.0454 3.30357C14.0459 3.30371 14.0464 3.30385 14.0468 3.304" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>):(<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>)}</div>
      <div className={styles.profile_img}><img src="../profile.png" alt="" /></div>
     </div>
    </div>
    <HeaderDrop/>
    <div className={`${styles.notification_dropdown} ${navDown&&(styles.vis_dropdown)} `}>
      {bell.length>0?(bell.map((p)=>{
        return <p key={p._id}>1 notification from {p.Name}</p>
      })):(<p>No Notification</p>)}
    </div>
    </>
  )
}
