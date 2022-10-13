import React from 'react'
import section from '../Section/section.css'
import Rectangle20 from '../../Assets/Rectangle20.png'
import Rectangle21 from '../../Assets/Rectangle21.png'
import Rectangle22 from '../../Assets/Rectangle22.png'


export const Section = () => {
  return (
    <div>
        <div className="show-text">
            <h1>NEW ARRIVALS</h1>
        </div>
        <div className="content-img">
            <div className="set1">
                <div className="set1-img">
                    <img src={Rectangle20} alt="Photo"  className='fit-img'/>
                </div>
                <div className="set1-text">
                    <div>
                        <h3>Hoodies and Sweetshirts</h3>
                        <span>Explore Now!</span>
                    </div>
                    <span><a href="">&#8594;</a></span>
                </div>
            </div>
            <div className="set1">
                <div className="set2-img">
                    <img src={Rectangle21} alt="Photo" className='fit-img'/>
                </div>
                <div className="set2-text">
                    <div>
                        <h3>Coats and Parkas</h3>
                        <span>Explore Now!</span>
                    </div>
                        <span><a href="">&#8594;</a></span>
                </div>
            
            </div>

            <div className="set1">
                <div className="set3-img">
                    <img src={Rectangle22} alt="Photo" className='fit-img'/>
                </div>

                <div className="set3-text">
                        <div>
                            <h3>Tees and T-shirts</h3>
                            <span>Explore Now!</span>
                        </div>
                        <span><a href="">&#8594;</a></span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Section;