import React, { useEffect, useState } from 'react'
import logo from "../../assets/Images/Evoke.png";
import logo1 from "../../assets/Images/Evoke1.png";
import "./Navbar.css"

const Navbar = () => {
    const [sticky,setSticky] = useState(false)
    useEffect(() => {
        window.addEventListener( 'scroll', () => {
            window.scrollY > 100 ? setSticky(true) : setSticky(false);
        } )
    },[]);
    const [mobileMenu,setMobileMenu] = useState(false);
    const toggleMenu = () =>{
        mobileMenu ? setMobileMenu(false): setMobileMenu(true);
    }

  return (
    <header>
        <nav className= {`container ${sticky || mobileMenu? 'dark-nav' : ''}`} >
            <div className='leftSide'>
                <ul className={mobileMenu? '':'hide-menu'}>
                    <li>About</li>
                    <li>Services</li>
                    <li>Location</li>
                    <li>Contact</li>
                </ul>
            </div>
            <img src={sticky||mobileMenu ? logo1 : logo } className='logo'></img>
            <div className='rightSide'>
                <button className={`nav-btn ${sticky? 'dark-btn': ''}`}>Reserve Now</button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width='10px' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='menu' onClick={toggleMenu}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </nav>
    </header>
  )
}

export default Navbar