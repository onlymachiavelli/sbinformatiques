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
                <Link href=""><a style={{background:"var(--Blue)"}} >Commander Un Devis</a></Link>
                <Link href=""><a style={{background:"#3B712E"}}>Appel Nous</a></Link>
            </div>
            <div className={styles.social_media}>
                <Link href="">
                    <Smail/>
                </Link>&nbsp;
                <Link href="">
                    <Whatsapp/>
                </Link>&nbsp;
                <Link href="">
                    <Messenger/>
                </Link>&nbsp;
                <Link href="">  
                    <Facebook/>
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
            <div className={styles.copy}></div>
        </footer>
    )
}
export default Footer