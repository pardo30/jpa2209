import React from 'react'
import { useState } from 'react'
import Expand from './Expand'
import './Miniature.css'

const Miniature = (props) => {
    const [showPopup, setShowPopup] = useState(false)
    
  return (
    <div>
    <div onClick={()=>setShowPopup(!showPopup)}>
        <img 
          classname="imgMiniatura" 
          src={process.env.PUBLIC_URL+props.data.miniatura} 
          alt={"Miniatura "+ props.data.title}
          width = "200" 
          height = "200" />
    </div>
    {showPopup 
            ? <Expand data={props.data} showPopup={()=>setShowPopup(!showPopup)}/>
            : null 
          }
    </div>
  )
}

export default Miniature