import React, { } from 'react'
import styles from './../../../styles/Home.module.css'
import { User, Mobile, Email } from './../SVG'

const Contact = () => {
    return (
        <div className={styles.contact_container}>
            <p id={styles.c_title}>Contactez Nous</p>
            <form onSubmit={() => { }}>
                <div className={styles.input}>
                    <div style={{ marginTop: "3px", }}>
                        <User />
                    </div>
                    <input type="text" name="" placeholder="Votre Nom Complet" />
                </div>

                <div className={styles.input}>
                    <div style={{ marginTop: "3px", }}>
                        <Mobile />
                    </div>
                    <input type="text" name="" placeholder="Votre Nom Complet" />
                </div>

                <div className={styles.input}>
                    <div style={{ marginTop: "3px", }}>
                        <Mobile />
                    </div>
                    <input type="text" name="" placeholder="Votre Nom Complet" />
                </div>

                <div className={styles.input}>
                    <div style={{ marginTop: "3px", }}>
                        <Mobile />
                    </div>
                    <input type="text" name="" placeholder="Votre Nom Complet" />
                </div>
            </form>
        </div>
    )
}

export default Contact