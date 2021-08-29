import React, {useState} from 'react'
import styles from './../../styles/Home.module.css'
import Link from 'next/link'
import {Bars} from './SVG'
const Navbar = () =>{
    const [Nav, setNav] = useState("none")
    return(
        <header className={styles.header}>
                <nav className={styles.navbar} >
                    <div className={styles.logo}>
                        <Link href="/">SBINFORMATIQUES</Link>
                    </div>
                    <div className={styles.resbtn}>
                        <button onClick={() => {
                            setNav(Nav === "none" ? "block" : "none")
                        }}>
                            <Bars />
                        </button>
                    </div>
                    <nav className={styles.nav} style={{ display: Nav }} >
                        <Link href="/">Acceuil</Link>
                        <Link href="/">Services</Link>
                        <Link href="/">Tarif</Link>
                        <Link href="/">A Propos</Link>
                    </nav>
                    <div className={styles.contact} style={{ display: Nav }}>
                        <Link href="/Cont">
                            <a className="contacta" style={{ backgroundColor: "var(--Blue)" }}>ContactezNous</a>
                        </Link>
                        <Link href="/contact">
                            <a className="calla" style={{ backgroundColor: "#3B712E" }}>AppelNous</a>
                        </Link>
                    </div>
                </nav>
            </header>
    )
}


export default Navbar