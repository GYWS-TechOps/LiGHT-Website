import React from 'react'
import Hero from '../components/Home/Hero.jsx'
import Mission from '../components/Home/Mission.jsx'
import Reach from '../components/Home/Reach.jsx'
import Events from '../components/Home/Events.jsx' 
import Media from '../components/Home/Media.jsx'
import ToTopButton from '../components/ToTopButton.jsx'


const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Reach />
      <Events/>
      <Media/>
      <ToTopButton />
    </div>
  )
}

export default Home