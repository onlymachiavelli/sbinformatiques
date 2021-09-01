import React, { useEffect } from 'react'
import Navbar from './../src/useFront/navbar'
import Footer from './../src/useFront/footer'
import styles from './../styles/Home.module.css'
import { Depann, Assis, Mant } from './../src/useFront/SVG'

const Services = () => {
    useEffect(() => {
        document.title = "SBI | NOS services"
    })
    return (
        <div className="">
            <Navbar />

            <div className={styles.service_container}>
                <br /><br /><br /><br />
                <div className={styles.b_title}>
                    Nos Services
                </div>
                <br />
                <br />

                <div className={styles.serv_flex}>
                    <div className={styles.service_card}>
                        <Depann />
                        <p id={styles.serv_title}>Depannage Informatiques</p>
                        <p id={styles.serv_description}>
                            Quel que soit les problèmes informatiques que vous rencontrez avec votre ordinateur, nous analyserons et solutionnerons tous vos soucis informatiques rapidement via une intervention informatique à domicile ou à distance.
                        </p>
                    </div>

                    <div className={styles.service_card}>
                        <Assis />
                        <p id={styles.serv_title}>Assistance Informatiques</p>
                        <p id={styles.serv_description}>
                            Un spécialiste informatique à vos côtés pour tous vos besoins : installation et configuration de matériels informatiques ou logiciels, assembler un ordinateur sur mesure, conception de sites internet WordPress…
                        </p>
                    </div>

                    <div className={styles.service_card}>
                        <Mant />
                        <p id={styles.serv_title}>Maintenance Infromatiques</p>
                        <p id={styles.serv_description}>Optez pour la tranquillité en nous confiant le contrôle, l’entretien, l’optimisation et la sécurité de votre ordinateur de bureau ou PC portable. Des performances optimales, sans dysfonctionnements, en toute sérénité.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services