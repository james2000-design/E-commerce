import React from 'react'
import young from '../Young/young.css'
import Rectangle50 from '../../Assets/Rectangle50.png'
import Rectangle49 from '../../Assets/Rectangle49.png'

const Young = () => {
  return (
    <div className='contain'>

        <div className="sect">
            <span>Young's favourite</span>
        </div>

        <div className="young-fav">


            <div className="fav1">
                    <div className="fav1-img">
                        <img src={Rectangle50} alt="Photo" className='fav-img'/>
                    </div>
                    <div className="fav1-text">
                        <div>
                            <h3>Trending on Instagram</h3>
                            <span>Explore Now!</span>
                        </div>
                            <span><a href="">&#8594;</a></span>
                    </div>
            
            </div>

            <div className="fav1">
                <div className="fav2-img">
                    <img src={Rectangle49} alt="Photo" className='fav-img'/>
                </div>

                <div className="fav2-text">
                        <div>
                            <h3>All under $40</h3>
                            <span>Explore Now!</span>
                        </div>
                        <span><a href="">&#8594;</a></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Young