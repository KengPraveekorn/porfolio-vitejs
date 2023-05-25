import React from 'react'
import Social from '../components/Social'
import profilepic from '../assets/01.png'

const Home = () => {
  return (
    <div className='condiv home'>
      <img src={profilepic} alt="profile" className='profilepic'/>
      <p className='typingeffect' style={{color: 'black'}}>I'm a Web Developer</p>
      <Social/>
    </div>
  )
}

export default Home
