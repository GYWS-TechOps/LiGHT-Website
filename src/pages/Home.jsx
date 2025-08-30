import React from 'react'
import Hero from '../components/Home/Hero'
import Mission from '../components/Home/Mission'
import Reach from '../components/Home/Reach'
import Events from '../components/Home/Events' 
import Media from '../components/Home/Media'


const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Reach />
      <Events/>
      <Media/>
    </div>
  )
}

export default Home