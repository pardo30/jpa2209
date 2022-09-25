import React from 'react'
import './Expand.css'

const Expand = (props) => {
  return (
    <div className='popup'>
        <div className='popup_inner'>
        <button className="closeExpand" onClick={props.showPopup}>X</button>
        <div className="imgExpand">
            <img 
            src={process.env.PUBLIC_URL+props.data.imagen} 
            alt={"Miniatura "+ props.data.title} />
        <div className="footerExpand">
            <div className="titleExpand">{props.data.title}</div>
            <div className="infoExpand">
                More info
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Expand