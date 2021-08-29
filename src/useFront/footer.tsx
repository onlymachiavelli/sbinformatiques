import React from 'react'
import styles from './../../styles/Home.module.css'
import {Face, Facebook , Messenger, Smail, Whatsapp} from './SVG'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_logo}>
                <p>SBINFORMATIQUES</p>
            </div>
            <div className={styles.footerflex}>
                <div className={styles.social_info}>
                    <div className={styles.social}>
                        <a href="#">
                            <i>
                                <Smail/>
                            </i>
                        </a>

                        <a href="#">
                            <i>
                                <Whatsapp/>
                            </i>
                        </a>

                        <a href="#">
                            <i>
                                <Messenger/>
                            </i>
                        </a>

                        <a href="#">
                            <i>
                                <Facebook/>
                            </i>
                        </a>
                        
                    </div>

                    
                </div>
                <div>

                </div>

                <div>
                    
                </div>
            </div>
        </footer>
    )
}
export default Footer