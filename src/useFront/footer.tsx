import React from 'react'
import styles from './../../styles/Home.module.css'
import {Face, Facebook , Messenger, Smail, Whatsapp} from './SVG'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_logo}>
                <b>SBINFORMATIQUES</b>
            </div>
            <div className={styles.footer_btns}>
                <Link href=""><a >cCommander Un Devis</a></Link>
                <Link href=""><a >cCommander Un Devis</a></Link>
            </div>
        </footer>
    )
}
export default Footer