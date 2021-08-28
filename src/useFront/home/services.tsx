import Link from 'next/link'
import React from 'react'
import styles from './../../../styles/Home.module.css'
import { Mant, Depann, Assis } from './../SVG'

const Services = () => {
    return (
        <main style={{ backgroundColor: "#ededed", width: "100%", height: "auto" }}>
            <div className={styles.b_title}>
                Nos Services
            </div>
            <br />
            <div className={styles.serv_container}>
                <div className={styles.card}>
                    <Depann />
                    <p id={styles.card_title}>Depannage Informatique</p>
                    <p id={styles.card_txt}>Proservices Informatique assure un support d’assistance...</p>
                    <br /><br />
                    <Link href="">Devis</Link>
                </div>
                <div className={styles.card}>
                    <Assis />
                    <p id={styles.card_title}>Assistance Informatique</p>
                    <p id={styles.card_txt}>Proservices Informatique assure un support d’assistance...</p>
                    <br /><br />
                    <Link href="">Devis</Link>
                </div>
                <div className={styles.card}>
                    <Mant />
                    <p id={styles.card_title}>Maintenance Informatique</p>
                    <p id={styles.card_txt}>Proservices Informatique assure un support d’assistance...</p>
                    <br /><br />
                    <Link href="">Devis</Link>
                </div>
            </div>
            <div style={{ width: "100%", height: "auto", textAlign: "center", marginBottom: "60px", marginTop: "20px" }}>
                <Link href="/services">
                    <a id={styles.vplus}> Voir Plus</a>
                </Link>
            </div>
        </main>
    )
}
export default Services