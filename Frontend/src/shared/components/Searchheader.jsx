import React from 'react'
import styles from './Searchheader.module.css'
export default function Searchheader() {
  return (
    <>
    <div className={styles.search_bar}>
     <label htmlFor="input_search">
       <img src="https://www.svgrepo.com/show/513099/magnifying-glass.svg" alt="" /> 
     </label>
     <input type="text" placeholder='Search' id='input_search' className={styles.input_search} />
     </div>
    </>
  )
}
