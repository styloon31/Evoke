import React, { useEffect, useRef } from 'react'
import "./Ourservices.css"
import { Reveal } from '../Reveal/Reveal1'
import {motion, useAnimation, useInView} from "framer-motion"

const arrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rightarr">
<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

const Ourservices = () => {
    const ref = useRef()
    const isInView = useInView(ref)
    const mainControls = useAnimation();
    const rightControls = useAnimation();
    useEffect (() =>{
        if(isInView){
            mainControls.start("visible")
            rightControls.start("visible")
        }
    },[isInView])

  return (
    <div className='ourservices-container container'>
        <div className='oureservice-heading'>
            <Reveal>
                <h2>Our Services</h2>
            </Reveal>
            <button>View All {arrow}</button>
        </div>
        <div className='Grid-container1'>
            <div className='Grid-container2'>
                <motion.div ref={ref}
                variants={{
                    hidden: {opacity: 0,x:-200},
                    visible: {opacity:1, x:0},
                }}
                initial ="hidden"
                animate ={mainControls}
                transition={{ duration: 0.5 ,delay: 0.25}}
                className='container2-item1'>
                    <motion.button
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                    >
                        Book
                        {arrow}
                    </motion.button>
                </motion.div>
                <motion.div ref={ref}
                variants={{
                    hidden: {opacity: 0,x:-200},
                    visible: {opacity:1, x:0},
                }}
                initial ="hidden"
                animate ={mainControls}
                transition={{ duration: 0.5 ,delay: 0.25}}
                className='container2-item2'>
                    <motion.button
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                    >
                        Book
                        {arrow}
                    </motion.button>
                </motion.div>
            </div>
            <motion.div ref={ref}
                variants={{
                    hidden: {opacity: 0,x:100},
                    visible: {opacity:1, x:0},
                }}
                initial ="hidden"
                animate ={rightControls}
                transition={{ duration: 0.5 ,delay: 0.25}}
            className='Grid-item2'>
                <motion.button
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                    >
                        Book
                        {arrow}
                </motion.button>
            </motion.div>
        </div>
    </div>
  )
}

export default Ourservices