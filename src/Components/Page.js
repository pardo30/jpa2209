import React from 'react'
import Miniature from './Miniature'
import './Page.css'

const Page = (props) => {
  return (
    <div class="pageBox">
    <div className='page'>
            <div className='technique'>{props.technique}</div>
            {props.data.map((data,key) => (
            <div className='pageMiniature' key={key}>
                <Miniature data={data}/>
                {/* <h2>{data.title}</h2> */}
            </div>
            ))}
    </div>
    </div>
  )
}

export default Page
