import React from 'react'
import footer from '../Footer/footer.css'
import Group10 from '../../Assets/Group10.png'
import Group11 from '../../Assets/Group11.png'
import Group12 from '../../Assets/Group12.png'
import Group13 from '../../Assets/Group13.png'

const Footer = () => {
  return (
    <div className='closing'>

      <div className="footer1">
          <div className="head">FASHION</div>
          <div className="par">complete your style with awesome <br /> clothes from us.</div>
          <div>
            <a href=""><img src={Group10} alt="Photo" className='social'/></a>
            <a href=""><img src={Group11} alt="Photo"className='social' /></a>
            <a href=""><img src={Group12} alt="Photo" className='social'/></a>
            <a href=""><img src={Group13} alt="Photo" className='social'/></a>
          </div>
      </div>
      <div className="footer2">
          <div className="contact-list">
            <h3>Company</h3>
            <p><a href="">About</a></p>
            <p><a href="">Contact Us</a></p>
            <p><a href="">Support</a></p>
            <p><a href="">Careers</a></p>
          </div>
      </div>
      <div className="footer3">
          <h3>Quick Links</h3>
            <p><a href="">Share Location</a></p>
            <p><a href="">Orders tracking</a></p>
            <p><a href="">Size Guide</a></p>
            <p><a href="">FAQs</a></p>
      </div>
      <div className="footer4">
            <h3>Legal</h3>
            <p><a href="">Terms & Conditions</a></p>
            <p><a href="">Privacy Policy</a></p>
          
      </div>
        
    </div>
  )
}

export default Footer