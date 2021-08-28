import React, { useEffect } from 'react'
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Slide from './../src/useFront/home/slide'
import Obj from './../src/useFront/home/obj'
import Services from "../src/useFront/home/services"
import Gmap from './../src/useFront/home/map'
import Ob from './../src/useFront/home/objecti'
import Contact from './../src/useFront/home/contact'
const SBI = () => {
  useEffect(() => {
    document.title = "SBI | Acceuil"
  })
  return (
    <main>
      <Slide />
      <Obj />
      <Services />
      <Ob />
      <Contact />
      <Gmap />

    </main>
  )
}
export default SBI
