import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Slide from './../src/useFront/home/slide'
import Obj from './../src/useFront/home/obj'
const SBI = () => {
  return (
    <main>
      <Slide />
      <Obj />
    </main>
  )
}
export default SBI
