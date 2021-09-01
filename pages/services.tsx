import React, { } from 'react'
import Navbar from './../src/useFront/navbar'
import Footer from './../src/useFront/footer'
import styles from './../styles/Home.module.css'
const Services = () => {
    return (
        <div className="">
            <Navbar />
            <div className={styles.service_container}>
                <div className={styles.serv_flex}>
                    <div className={styles.service_card}>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services