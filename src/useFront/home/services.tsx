import React from 'react'
import styles from './../../../styles/Home.module.css'
import { Mant, Depann, Assis } from './../SVG'
const Services = () =>{
    return(
       <main style={{backgroundColor:"#ededed", width:"100%", height:"auto"}}>
            <p id={styles.tit}>Nos Services</p>
            <div className={styles.serv_container}>
                <div className={styles.card}>
                    <Depann/>
                    <p id={styles.card_title}>Depannage Informatique</p>
                </div>
                <div className={styles.card}>
                    <Assis/>
                    <p id={styles.card_title}>Assistance Informatique</p>
                </div>
                <div className={styles.card}>
                    <Mant/>
                    <p id={styles.card_title}>Maintenance Informatique</p>
                </div>
            </div>
        </main>
    )
}
export default Services