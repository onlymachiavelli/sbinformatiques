import React, { useRef} from 'react'
import styles from './../../../styles/Home.module.css'
import { Face } from './../SVG'
import One from './../../../public/one.json'
import Two from './../../../public/two.json'
import Three from './../../../public/three.json'
import Lottie from 'lottie-react'

const Ob = () => {
    const refOne = useRef()
    const refTwo = useRef()
    const refThree = useRef()
    return (
        <div className={styles.ob_container}>
            <div className={styles.b_title}>
                Notre Objectives
            </div>
            <br />
            <div className={styles.ob_c}>
                <div className={styles.ob_img}>
                    {
                        //<Face />
                        }

                        <Lottie
                            ref={refOne}
                            
                            animationData={One}
                            loop
                            autoplay
                            style={{
                                width: "250px",
                                height: "250px",
                            }}
                        />
                </div>
                <div>
                    <p id={styles.o_title}>Assistance technique de qualité supérieure</p>
                    <p id={styles.o_d}>
                    Notre premier objectif est de fournir à nos clients une assistance technique de premier ordre. Nous nous engageons à résoudre rapidement et efficacement leurs problèmes informatiques, en utilisant nos compétences et notre expertise pour assurer leur satisfaction.
                    </p>
                </div>
            </div>

            <div className={styles.ob_c}>
                <div className={styles.ob_img}>
                <Lottie
                            ref={refTwo}
                            
                            animationData={Two}
                            loop
                            autoplay
                            style={{
                                width: "200px",
                                height: "200px",
                            }}
                        />
                </div>
                <div>
                    <p id={styles.o_title}>Maximisation de la disponibilité des systèmes informatiques</p>
                    <p id={styles.o_d}>
                    Nous nous efforçons de maximiser la disponibilité des systèmes informatiques de nos clients. En fournissant des services de maintenance préventive régulière, des mises à jour logicielles et des solutions de sécurité efficaces, nous aidons nos clients à éviter les pannes coûteuses et les temps d'arrêt, tout en maintenant leurs systèmes fonctionnant de manière optimale.                    </p>
                </div>
            </div>

            <div className={styles.ob_c}>
                <div className={styles.ob_img}>
                <Lottie
                            ref={refThree}
                            
                            animationData={Three}
                            loop
                            autoplay
                            style={{
                                width: "250px",
                                height: "250px",
                            }}
                        />
                </div>
                <div>
                    <p id={styles.o_title}>Service client exceptionnel</p>
                    <p id={styles.o_d}>
                    Notre engagement envers nos clients va au-delà de la résolution de problèmes techniques. Nous nous efforçons de fournir un service client exceptionnel à chaque interaction. Notre équipe amicale et compétente est toujours prête à répondre aux questions, à offrir des conseils et à assurer une communication claire et transparente avec nos clients, afin de créer une relation de confiance à long terme.                    </p>
                </div>
            </div>
        </div>
    )
}

export default Ob