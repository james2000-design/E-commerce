import React from 'react'
import mobile from '../Mobile/mobile.css'
import Group84 from '../../Assets/Group84.png'
import Rectangle55 from '../../Assets/Rectangle55.png'
import Rectangle18 from '../../Assets/Rectangle18.png'

const Mobile = () => {
  return (
    <div className='download'>

        <div className="apple">
            <h1>DOWNLOAD APP & GET THE VOUCHER!</h1>
            <p>Get 30% off for first transaction using Rondonvision mobile app for now!</p>
            <div className="cut">
                <p><img src={Rectangle55} alt="Photo"  width={'100%'}/></p>
                <p><img src={Rectangle18} alt="Photo" width={'100%'}/></p>
            </div>
        </div>
        <div className="mobile-img">
            <img src={Group84} alt="Photo" className='match' width={'100%'}  />
        </div>

    </div>
  )
}

export default Mobile