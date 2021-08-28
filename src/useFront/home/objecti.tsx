import React, { } from 'react'
import styles from './../../../styles/Home.module.css'
import { Face } from './../SVG'

const Ob = () => {
    return (
        <div className={styles.ob_container}>
            <div className={styles.ob_c}>
                <div className={styles.ob_img}>
                    <Face />
                </div>
                <div>
                    <p id={styles.o_title}>Satisfaction de nos clients</p>
                    <p id={styles.o_d}>
                        Yedhom f z4536 Informatique assure un support d’assistance informatique 7 jours sur 7 de 8 heures à 22 heures, en vous accueillant par e-mail ou ticket d’assistance informatique pour vous apporter des solutions
                    </p>
                </div>
            </div>

            <div className={styles.ob_c}>
                <div className={styles.ob_img}>
                    <Face />
                </div>
                <div>
                    <p id={styles.o_title}>Satisfaction de nos clients</p>
                    <p id={styles.o_d}>
                        Yedhom f z4536 Informatique assure un support d’assistance informatique 7 jours sur 7 de 8 heures à 22 heures, en vous accueillant par e-mail ou ticket d’assistance informatique pour vous apporter des solutions
                    </p>
                </div>
            </div>

            <div className={styles.ob_c}>
                <div className={styles.ob_img}>
                    <Face />
                </div>
                <div>
                    <p id={styles.o_title}>Satisfaction de nos clients</p>
                    <p id={styles.o_d}>
                        Yedhom f z4536 Informatique assure un support d’assistance informatique 7 jours sur 7 de 8 heures à 22 heures, en vous accueillant par e-mail ou ticket d’assistance informatique pour vous apporter des solutions
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Ob