import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './../../../styles/Home.module.css'
import { Handdown } from './../SVG'
import Image from 'next/image'
import Image1 from './../../../public/image1.png'
import Navbar from '../navbar'
const Slide = () => {
    return (
        <div className={styles.slide_container}>
            <Navbar/>

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
                <a href="#obj">
                    <button>
                        <b id={styles.anim}>
                            <Handdown />
                        </b>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Slide