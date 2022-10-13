import React from 'react'
import display from './display.css'
import Frame from'../../Assets/Frame.png'

const Display = () => {
  return (
    <div className='frame'>
        <img src={Frame} alt="Photo" className='frame-image' />
    </div>
  )
}

export default Display