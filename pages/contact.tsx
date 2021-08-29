import React, {useEffect} from 'react'

import Contact  from '../src/useFront/home/contact'
import Navbar from '../src/useFront/navbar'
import Footer from '../src/useFront/footer'

const ContactUs = () =>{
    useEffect(()=>{
        document.title = "SBI | Contactez Nous"
    })
    return(
        <div>
            <Navbar/>
            <br/><br/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default ContactUs