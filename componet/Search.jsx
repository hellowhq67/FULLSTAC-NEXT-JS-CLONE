import React from 'react'
import styles from '@/styles/Nav.module.css'
function Search({isOpen,close}) {
  return (
   <div>
   <div className={`bg ${isOpen?"active-src":""}`} onClick={close}></div>
     <div className={`app-src-card ${isOpen?"active-src":""}`}>
      
      <div className="app-flex my-10"><span className='sm-btn sm-btn1'>app</span> <span className='sm-btn sm-btn2'>pages</span></div>
      <input className={styles.searchbar} type="text" />
    </div>
   
   </div>
  )
}

export default Search
