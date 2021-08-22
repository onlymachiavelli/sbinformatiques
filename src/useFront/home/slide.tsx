import React, {} from 'react'
import Link from 'next/link'
import styles from './../../../styles/Home.module.css'
const Slide = () =>{
    return(
        <div className={styles.slide_container}>
            <header className={styles.header}>
                <nav className={styles.navbar} >
                    <div className={styles.logo}>
                        <Link href="/">SBINFORMATIQUES</Link>
                    </div>
                    <nav className={styles.nav} >
                    <Link href="/">Acceuil</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">Tarif</Link>
                    <Link href="/">A Propos</Link>
                    </nav>
                </nav>
            </header>
        </div>
    )
}

export default Slide