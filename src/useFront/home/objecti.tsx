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
            </div>
        </div>
    )
}

export default Ob