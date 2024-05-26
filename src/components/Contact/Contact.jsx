import React from 'react'
import './Contact.css'

function Contact() {
  return (
    
      <div>
       <div className="skills" id='contact'><h1>CONTACT</h1></div>

        <div className="contact" >
        <div className="contact-form">
          <h1>LET'S WORK TOGETHER!</h1>
          <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
          <input type="text" name="" id="" placeholder='FULL NAME'/>
          <input type="email" name="" id=""placeholder='EMAIL ADDRESS' />
          <input type="tel" name="" id="" placeholder='PHONE'/>
          <textarea name="" id="" placeholder='MESSAGE' rows={5}></textarea>
          <button>SEND MESSAGE<i className='bx bxl-telegram'></i></button>
        </div>

        <div className="contact-info">
          <div className="phone">
           <i className='bx bxs-phone-call' ></i>
            <div className="details">
            <h2>PHONE</h2>
            <p><a href="tel:+918583053099">+918583053099</a></p>
            </div>
          </div>
          <div className="email">
            <i className='bx bx-envelope' ></i> 
            <div className="details">
            <h2>EMAIL</h2>
           <p>rajdippramanik31@gmail.com</p>
            </div>
          </div>
          <div className="address">
            <i className='bx bx-current-location' ></i>
            <div className="details">
            <h2>ADDRESS</h2>
            <p>MALLIKPUR, KOLKATA-700145, WEST BENGAL, INDIA</p>
            </div>
          </div>
        </div>
      </div>
      </div>
  
  )
}

export default Contact
