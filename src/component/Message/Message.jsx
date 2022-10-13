import React from 'react'
import message from '../Message/message.css'

const Message = () => {
  return (
    <div className='parent'>
        <div className="carry">
            <div className="join">
                <div className='promo'>
                    <p>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</p>
                </div>
                <p>
                    Type your Email below and be young wild generation
                </p>
            </div>
            <div className='cover'>
                <p className='firm'>
                    <input type="email" name="" id="" placeholder='Add your email here' className='add'/>
                </p>
                <button className='sender'>SEND</button>
            </div>
        </div>

    </div>
  )
}

export default Message