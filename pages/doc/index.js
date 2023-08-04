import React, { useEffect } from 'react'
import styles from '@/styles/Docs.module.css'
import Navbar from '@/componet/Navbar'
import Asidebar from '@/componet/Asidebar'
import Doc from '@/componet/Doc'
import SideConetet from '@/componet/SideConetet'
import axios from 'axios'
function docs() {



    return (
        <>
            <Navbar />
            <section className={styles.docwrapper}>
                <Asidebar />
              
                    <Doc />
                    <SideConetet />

             
            </section>

        </>
    )
}

export default docs