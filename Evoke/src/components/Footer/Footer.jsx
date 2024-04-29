import React from 'react'
import "./Footer.css"
import logo from "../../assets/Images/Evoke1.png";
import contact from "../../assets/Images/contactUs.png";

const Footer = () => {
  return (
    <footer className='container'>
        <div className='foot-grid'>
            <div className='foot-Evoke'>
                <img src={logo} />
                <p>mon - fri:8:00 AM - 7-00 PM</p>
                <p>sat - sun:8:00 AM - 7-00 PM</p>
                <h4>info@Evoke.com</h4>
            </div>
            <div className='foot-services'>
                <h2>Services</h2>
                <p>Hair Cut</p>
                <p>Grooming</p>
                <p>Faical</p>
                <p>Hair Color</p>
                <p>Makeup</p>
            </div>
            <div className='foot-links'>
                <h2>Links</h2>
                <p>About</p>
                <p>Location</p>
                <p>Contact</p>
                <p>Privacy Policy</p>
                <p>Terms of Servies</p>
            </div>
            <div className='foot-resources'>
                <h2>Resources</h2>
                <p>Style Guide</p>
            </div>
            <div className='foot-contact'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29 2H11C6.02944 2 2 6.02944 2 11V29C2 33.9706 6.02944 38 11 38H29C33.9706 38 38 33.9706 38 29V11C38 6.02944 33.9706 2 29 2Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M29.9005 10.0994H29.9185M27.2005 18.8654C27.4227 20.3634 27.1668 21.8934 26.4693 23.2376C25.7718 24.5818 24.6682 25.6719 23.3155 26.3528C21.9627 27.0336 20.4298 27.2706 18.9346 27.03C17.4394 26.7894 16.0581 26.0835 14.9873 25.0127C13.9164 23.9418 13.2105 22.5605 12.9699 21.0654C12.7293 19.5702 12.9663 18.0372 13.6471 16.6844C14.328 15.3317 15.4181 14.2281 16.7623 13.5306C18.1066 12.8331 19.6365 12.5772 21.1345 12.7994C22.6626 13.026 24.0773 13.738 25.1696 14.8303C26.2619 15.9226 26.974 17.3373 27.2005 18.8654Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Follow Us
            </div>
        </div>
        <div className='ContactUs'>
            <img src={contact} className='contactImg'/>    
            <svg  viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className='contact-svg'>
            <circle cx="22" cy="22" r="20.5" stroke="white" stroke-width="3"/>
            <path d="M36.4121 23.0607C36.9979 22.4749 36.9979 21.5251 36.4121 20.9393L26.8662 11.3934C26.2804 10.8076 25.3307 10.8076 24.7449 11.3934C24.1591 11.9792 24.1591 12.9289 24.7449 13.5147L33.2301 22L24.7449 30.4853C24.1591 31.0711 24.1591 32.0208 24.7449 32.6066C25.3307 33.1924 26.2804 33.1924 26.8662 32.6066L36.4121 23.0607ZM8.13525 23.5L35.3515 23.5L35.3515 20.5L8.13525 20.5L8.13525 23.5Z" fill="white"/>
            </svg>
        </div>
        <div className='bitstobug'>
            <p>&#169;Barber. All Rights Reserved 2024.<br />Designed By <span className='btb'>BITSTOBUG</span></p>
        </div>
    </footer>
  )
}

export default Footer