import React, { useState } from 'react'
import Link from 'next/link'
import styles from './../../../styles/Home.module.css'
import { Bars } from './../SVG'
import Image from 'next/image'
import Image1 from './../../../public/image1.png'
const Slide = () => {
    const [Nav, setNav] = useState("none")
    return (
        <div className={styles.slide_container}>
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
                        <Link href="/">
                            <a className="contacta" style={{ backgroundColor: "var(--Blue)" }}>ContactezNous</a>
                        </Link>
                        <Link href="/">
                            <a className="calla" style={{ backgroundColor: "#3B712E" }}>AppelNous</a>
                        </Link>
                    </div>
                </nav>
            </header>

            <main className={styles.desc}>
                <article className={styles.article}>
                    <p id={styles.desc_title}>
                        Dépannage informatique & Assistance, Maintenance
                    </p>
                    <p id={styles.desc_txt}>
                        Proservices Informatique est une entreprise spécialisée dans les services informatiques & prestations WordPress depuis 2011. Nos prestations vous aide à répondre à tous vos besoins ou à solutionner vos problèmes liés à
                    </p>
                    <Link href="/">
                        <a id={styles.serv_link}>Notre Services</a>
                    </Link>
                </article>
                <aside className={styles.aside}>
                    <div className={styles.image}></div>
                </aside>
            </main>
            <div className={styles.explore}>
                <Link href="/">Explorer Plus</Link>
            </div>
        </div>
    )
}

export default Slide