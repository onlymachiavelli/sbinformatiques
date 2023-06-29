import React from 'react'
import styles from './../../../styles/Home.module.css'
import { Computer, Btime, Settings } from './../SVG'

const Obj = () => {

    return (
        <div className={styles.obj_container} id="obj">
            <div className={styles.card}>
                <Btime />
                <p id={styles.card_title}>Support performant et réactif</p>
                <p id={styles.card_txt}>
                Un support performant et réactif pour tous vos besoins informatiques. Nos techniciens compétents sont là pour résoudre rapidement vos problèmes. </p>
            </div>
            <div className={styles.card}>
                <Settings />
                <p id={styles.card_title}>Intervention à distance et à domicile</p>
                <p id={styles.card_txt}>

                Intervention rapide et pratique, que ce soit à distance ou à domicile. Nous offrons des services d'assistance flexibles pour résoudre vos problèmes informatiques où que vous soyez.                </p>
            </div>
            <div className={styles.card}>
                <Computer />
                <p id={styles.card_title}>Solutions informatique</p>
                <p id={styles.card_txt}>
                Découvrez nos solutions informatiques complètes. Nous offrons des services de réparation, de maintenance et de support technique pour répondre à tous vos besoins informatiques.                 </p>
            </div>
        </div>
    )
}
export default Obj