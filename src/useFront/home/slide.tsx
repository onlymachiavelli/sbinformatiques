import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './../../../styles/Home.module.css'
import { Handdown } from './../SVG'
import Image from 'next/image'
import Image1 from './../../../public/image1.png'
import Pc from './../../../public/pc.json'
import Lottie from 'lottie-react'
import Navbar from '../navbar'
const Slide = () => {
    const ref = useRef()
    return (
        <div className={styles.slide_container} id="home">
            <Navbar/>

            <main className={styles.desc}>
                <article className={styles.article}>
                    <p id={styles.desc_title}>
                        Dépannage informatique & Assistance, Maintenance
                    </p>
                    <p id={styles.desc_txt}>
                    Réparation et maintenance d'ordinateurs rapides et fiables. Confiez-nous vos problèmes matériels et logiciels. Solutions efficaces garanties.
                        </p>
                    <Link href="/services">
                        <a id={styles.serv_link}>Notre Services</a>
                    </Link>
                </article>
                <aside className={styles.aside}>
                    <div className={styles.image}>

                        <Lottie
                            animationData={Pc}
                            loop
                            autoplay
                            style={{
                                width: "200",
                                height: "200",
                            }}
                            ref={ref}
                        />
                    </div>
                </aside>
            </main>
            <div className={styles.explore} style={{
                paddingBottom:"20px"
            }}>
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