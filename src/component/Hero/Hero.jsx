import React from 'react'
import hero from '../Hero/hero.css'
import pink from '../../Assets/pink.png'

const Hero = () => {
  return (
    <div className='cross'>
      <div className="hero1">
          <div className="hero-text">
            <h1>
              <span className='let'>LET'S</span><br />
              EXPLORE <br/>
              <span className='spell'>UNIQUE</span><br/>
              CLOTHES.

            </h1>
            Live for influencial and innovative fashion!
            <div className="button">
              <a href=""><button className='btn1'>SHOP NOW</button></a>
            </div>
          </div>
          <div className="hero-img">
            <img src={pink} alt="photo"  className='flash'/>
          </div>
        </div>
    </div>
  )
}

export default Hero