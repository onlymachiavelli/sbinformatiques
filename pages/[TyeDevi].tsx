import React, {} from 'react'
import { useRouter } from 'next/router'


const IsIn = (Route:String)=> {
    let RoutesArray = []
    for (let i=0;i<RoutesArray.length;i++)if(RoutesArray[i] === Route) return true
    return false
}


const Devis = () =>{
    return(
        <div>

        </div>
    )
}
export default Devis