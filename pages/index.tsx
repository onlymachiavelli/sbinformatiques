import React, {useEffect} from 'react'
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Slide from './../src/useFront/home/slide'
import Obj from './../src/useFront/home/obj'
import Services  from "../src/useFront/home/services"
const SBI = () => {
  useEffect(()=>{
    document.title = "SBI | Acceuil"
  })
  return (
    <main>
      <Slide />
      <Obj />
      <Services/>
    </main>
  )
}
export default SBI
