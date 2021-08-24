import React from 'react'
import styles from './../../../styles/Home.module.css'
import { Computer, Btime, Settings } from './../SVG'

const Obj = () => {

    return (
        <div className={styles.obj_container}>
            <div className={styles.card}>
                <Btime />
                <p id={styles.card_title}>Support performant et réactif</p>
                <p id={styles.card_txt}>
                    Proservices Informatique assure un support d’assistance informatique 7 jours sur 7 de 8 heures à 22 heures, en vous accueillant par e-mail ou ticket d’assistance informatique pour vous apporter des solutions
                </p>
            </div>
            <div className={styles.card}>
                <Settings />
                <p id={styles.card_title}>Intervention à distance et à domicile</p>
                <p id={styles.card_txt}>
                    Proservices Informatique assure un support d’assistance informatique 7 jours sur 7 de 8 heures à 22 heures, en vous accueillant par e-mail ou ticket d’assistance informatique pour vous apporter des solutions
                </p>
            </div>
            <div className={styles.card}>
                <Computer />
                <p id={styles.card_title}>Solutions informatique</p>
                <p id={styles.card_txt}>
                    Proservices Informatique assure un support d’assistance informatique 7 jours sur 7 de 8 heures à 22 heures, en vous accueillant par e-mail ou ticket d’assistance informatique pour vous apporter des solutions
                </p>
            </div>
        </div>
    )
}
export default Obj