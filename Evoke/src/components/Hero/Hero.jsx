import React, { useEffect, useState } from 'react'
import "./Hero.css"
import {Reveal} from "../Reveal/Reveal"
import { useSpring, animated } from '@react-spring/web';
import salon from "../../assets/Videos/salon.mp4"
import p1 from "../../assets/Images/p1.jpeg"
const arrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rightarr">
<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

const Hero = () => {
    const fadeInAnimation = useSpring({
        from: { opacity: 0, marginTop: -1000 },
        to: { opacity: 1, marginTop: 0 },
        config: { tension: 180, friction: 12, duration:1000 },
      });
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
      }, []);  
  return (
    
        <div className='hero container'>
            <video autoPlay muted loop className='hero-video'>
                <source src={salon} type='video/mp4' />
            </video>
            <animated.div style={fadeInAnimation}>
            <div className='heroGrid-Container'>
                
                <div className='hero-text '>
                    <Reveal>
                        <h1 className='hero-h1'>BE BOLD. BE <br/> BEAUTIFUL. BE YOU</h1>
                    </Reveal>
                    <Reveal>
                        <p className='hero-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas egestas viverra turpis habitant eu sociis fermentum felis.</p>
                    </Reveal> 
                    <div className='hero-buttons'>
                        <button className='btn-gallery'>
                            Our Gallery
                            {arrow}
                        </button>
                        <button className='btn-services'>
                            Our Services
                            {arrow}
                        </button>
                    </div>                   
                </div>
                <animated.div style={fadeInAnimation}>
                    <div className='review-container'>
                        <h2 className='re'>Reviews</h2>

                        <div className='review-heading'>
                            <img src={p1} alt='' className='img_test' />
                            <h3>Kristen Watson</h3>             
                        </div>
                        <p className='review-p'>“Thanks to the masters of the Hairy salon for creating an incredible hairstyle! You made my hair extremely soft, I recommend!”</p>
                        <div >
                            <button className='review-btn'>
                                Book Now
                                {arrow}
                            </button>
                        </div>
                        <button className='btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rightarr">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <button className='btn' onClick={() => setAnimate(true)} >  
                            {arrow}
                        </button>
                    </div>
                </animated.div>
                
            </div>
            </animated.div>
        </div>
    
    
  )
}

export default Hero