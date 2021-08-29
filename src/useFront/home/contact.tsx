import React, { } from 'react'
import styles from './../../../styles/Home.module.css'
import { User, Mobile, Email,  Txt } from './../SVG'

const Contact = () => {
    return (
        <div className={styles.contact_container} id="contact">
            <p id={styles.c_title}>Contactez Nous</p>
            <form onSubmit={() => { }}>
                <div className={styles.input}>
                    <div style={{ marginTop: "3px", }}>
                        <User />
                    </div>
                    <input type="text" name="" placeholder="Votre Nom Complet" required />
                </div>

                <div className={styles.input}>
                    <div style={{ marginTop: "3px", }}>
                        <Mobile />
                    </div>
                    <input type="text" name="" placeholder="Votre Num de Tel" required />
                </div>

                <div className={styles.input}>
                    <div style={{ marginTop: "3px", }}>
                        <Email />
                    </div>
                    <input type="text" name="" placeholder="Votre Email" required />
                </div>

                <div className={styles.input}>
                    <div style={{ marginTop: "3px", }}>
                        <Txt />
                    </div>
                    <input type="text" name="" placeholder="Objectif" required />
                </div>

                <div style={{width:"100%", textAlign:"center"}}>
                    <textarea placeholder="Votre Message"></textarea>
                </div>
                <button type="submit" className={styles.send_btn}>Envoyer</button>
            </form>
        </div>
    )
}

export default Contact