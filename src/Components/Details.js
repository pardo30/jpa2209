import React from 'react'
import './Details.css'

const Details = (props) => {
    return (
        <div className='detailContainer'>
            <button className='detailButton' onClick={props.showDetails}>x</button>
            <div class="detailInfo">
            <div class='detailsTitle'> {props.title}</div>
            <div class='detailsPapel'>{props.papel}</div>
            <div class='detaislmatriz'>{props.matriz}</div>
            <div class='detailsOtros1'>{props.otros1}</div>
            <div class='detailsOtros2'>{props.otros2}</div>
            <div class='detailsEsmalte'>{props.esmalte}</div>
            </div>
        </div>
    )
}

export default Details