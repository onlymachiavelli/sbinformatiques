import React, { useState } from 'react'
import styles from './../../styles/Home.module.css'
import {Face, Facebook , Messenger, Smail, Whatsapp, Up} from './SVG'
import Link from 'next/link'
const Footer = () => {
    let date = new Date()
    const year = date.getFullYear()
    
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_logo}>
                <b>SBINFORMATIQUES</b>
            </div>
            <div className={styles.footer_btns}>
                <Link href=""><a style={{background:"var(--Blue)"}} >Commander Un Devis</a></Link>
                <Link href="tel:51920215"><a style={{background:"#3B712E"}}>Appel Nous</a></Link>
            </div>
            <div className={styles.social_media}>
                <Link href="mailto:sbinformatiques@gmail.com">
                    <a><Smail/></a>
                </Link>&nbsp;
                <Link href="https://wa.me/51920215">
                    <a><Whatsapp/></a>
                </Link>&nbsp;
                <Link href="">
                    <a><Messenger/></a>
                </Link>&nbsp;
                <Link href="https://www.facebook.com/SBInformatiques/">  
                    <a><Facebook/></a>
                </Link>
                <br/><br/>
                <Link href="">
                    <a 
                        style={{
                            color:"#fff",
                            textDecoration:"underline",
                        }}
                    >sbinforatiques@crocodile.com</a>
                </Link>
            </div>
            <p id={styles.phonen}>51 920 215 / 70 720 215</p>
            <div className={styles.copy}>
                    <p>SBI &copy; {year}</p>
                    <Link href="#home">
                        <a  className={styles.upbtn}>
                        <Up/>
                        </a>
                    </Link>
            </div>
        </footer>
    )
}
export default Footer