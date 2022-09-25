import React from 'react'
import Miniature from './Miniature'
import './Page.css'

const Page = (props) => {
  return (
    <div className='page'>
            {props.data.map((data,key) => (
            <div className='pageMiniature' key={key}>
                <Miniature data={data}/>
                {/* <h2>{data.title}</h2> */}
            </div>
            ))}
        {/* <div>
            {Data.map((data, key) => {
                return (
                    <div key={key}>
                        <p>{data.title}</p>
                    </div>
                );
            })}

        </div> */}
    </div>
  )
}

export default Page
