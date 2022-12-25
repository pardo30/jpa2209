import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <video 
        src={process.env.PUBLIC_URL+"/img/javierpardoarte.mp4"} 
        alt={"Video Homepage"}
        autoPlay
        loop
        />
    </div>
  )
}

export default Home