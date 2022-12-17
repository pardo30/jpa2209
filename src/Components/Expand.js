import React from 'react'
import { useState } from 'react'
import Details from './Details';
import './Expand.css'


const Expand = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='popup'>
      <div className='popup_inner'>
        <div class="topExpand">
          {/* <button class="buttonExpand">[Prev]</button> */}
          <button className="buttonExpand" onClick={props.showPopup}>
          <img src={process.env.PUBLIC_URL + '/img/close.png'} alt="Close" className='close' />
          </button>
          {/* <button class="buttonExpand">[Next]</button> */}
        </div>
        <div className="imgExpand">
          <img
            src={process.env.PUBLIC_URL + props.data.imagen}
            alt={"Miniatura " + props.data.title} />
          {showDetails
            ? <div class="details">
              <Details
                title={props.data.title}
                papel={props.data.papel}
                matriz={props.data.matriz}
                otros1={props.data.otros1}
                otros2={props.data.otros2}
                esmalte={props.data.esmalte}
                showDetails={() => setShowDetails(!showDetails)}
              />
            </div>
            : null
          }
        </div>
        {showDetails
          ? null
          : <div className="footerExpand">
            <div className="titleExpand">{props.data.title}</div>
            <div className="infoExpand" onClick={() => setShowDetails(!showDetails)}>
            <img src={process.env.PUBLIC_URL + '/img/info.png'} alt="Info" className='info' />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Expand