

import React from 'react'

import {usePathname} from "next/navigation"
import { url_Check } from '../context/_url_check_context'

export default function Navbar_url() {
    const pathname = usePathname()
    const [_link,setLink]=React.useState("")
    React.useEffect(()=>{
    const url = `${pathname}`
    if(url_Check._router_QC.includes(url) ||  url_Check._router_QC.includes(pathname.split("/").slice(0,3).join("/")) )  {
    return setLink("QC App")
    }else{
      return setLink("Home")
    }
    },[pathname])
    
return {_link:_link};

}
