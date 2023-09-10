import React from 'react'
import styles from './Header.module.css'
import Searchheader from './Searchheader'
import HeaderDrop from './HeaderDrop'


export default function Header() {
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
      <div className={` ${styles.calender_header} ${styles.hover_header}`}>Calender</div>
     </div>
     <div className={styles.gap}></div>
     <div className={styles.search_div}>
     <Searchheader/>
     </div>
     <div className={styles.last_icons}>
      <div className={styles.users_edit}><img src="https://www.svgrepo.com/show/498296/profile-2user.svg" alt="" /></div>
      <div className={styles.bell_icon}><img src="https://www.svgrepo.com/show/522763/bell.svg" alt="" /></div>
      <div className={styles.profile_img}><img src="https://www.svgrepo.com/show/522440/profile.svg" alt="" /></div>
     </div>
    </div>
    <HeaderDrop/>

    </>
  )
}
