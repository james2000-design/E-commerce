import React from 'react'
import pact from '../Pact/pact.css'
import image from '../../Assets/image12.png'

const Pact = () => {
  return (
    <div>
        <div className="trend">
            <div className="picture">
                <img src={image} alt="Photo"  className='yellow-img'/>
            </div>
            <div className="copy">
                <h1><span className='pay'>PAYDAY</span><br /> SALE NOW</h1>
                <p>Spend minimal $100 get 30% off <br /> voucher code for your next purchase</p>
                <div>
                    <h3>1 June - 10 June 2022</h3>
                    <p><a href="">*Terms</a> and <a href="">Conditions</a> apply</p>
                </div>
                <p className='shop'>
                    <a href=""><button className='btn'>Shop Now</button></a>
                </p>
                
            </div>
        </div>
    </div>
  )
}

export default Pact