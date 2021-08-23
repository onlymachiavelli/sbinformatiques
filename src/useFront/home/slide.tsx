import React, {useState} from 'react'
import Link from 'next/link'
import styles from './../../../styles/Home.module.css'
import {Bars} from './../SVG'
const Slide = () =>{
    const [Nav, setNav] = useState("block")
    return(
        <div className={styles.slide_container}>
            <header className={styles.header}>
                <nav className={styles.navbar} >
                    <div className={styles.logo}>
                        <Link href="/">SBINFORMATIQUES</Link>
                    </div>
                    <div className={styles.resbtn}>
                        <button onClick={()=>{
                            setNav(Nav === "none" ? "block" : "none")
                        }}>
                            <Bars/>
                        </button>
                    </div>
                    <nav className={styles.nav} style={{display:Nav}} >
                        <Link href="/">Acceuil</Link>
                        <Link href="/">Services</Link>
                        <Link href="/">Tarif</Link>
                        <Link href="/">A Propos</Link>
                    </nav>
                    <div className={styles.contact} style={{display:Nav}}>
                        <Link href="/">
                            <a className="contacta" style={{backgroundColor:"var(--Blue)"}}>ContactezNous</a>
                        </Link>
                        <Link href="/">
                            <a className="calla" style={{backgroundColor:"#3B712E"}}>AppelNous</a>
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Slide