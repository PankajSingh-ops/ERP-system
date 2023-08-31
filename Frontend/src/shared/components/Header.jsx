import React from 'react'
import styles from './Header.module.css'
import Searchheader from './Searchheader'


export default function Header() {
  return (
    <>
    <div className={styles.main_header}>
     <div className={styles.logo_header}><img src="./logo.png" alt="" /></div>
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
      
      <div className={styles.bell_icon}><img src="https://www.svgrepo.com/show/522763/bell.svg" alt="" /></div>
      <div className={styles.profile_img}><img src="https://www.svgrepo.com/show/522440/profile.svg" alt="" /></div>
     </div>
    </div>
    </>
  )
}
