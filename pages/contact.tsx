import React, {useEffect} from 'react'

import Contact  from '../src/useFront/home/contact'

const ContactUs = () =>{
    useEffect(()=>{
        document.title = "SBI | Contactez Nous"
    })
    return(
        <div>
            <Contact/>
        </div>
    )
}

export default ContactUs