import React, { useEffect, useRef } from 'react'
import "./Change.css"
import {motion, useAnimation, useInView} from "framer-motion"
import { Reveal } from '../Reveal/Reveal'


const Change = () => {
    const ref = useRef()
    const isInView = useInView(ref)
    const mainControls = useAnimation();
    useEffect (() =>{
        if(isInView){
            mainControls.start("visible") 
        }
    },[isInView])
  return (
    <div className='Change-Container container'>
        <div className='Grid-Container '>
            <div className='Grid-item1'>
                <motion.div ref={ref}
                variants={{
                    hidden: {opacity: 0,x:-200},
                    visible: {opacity:1, x:0},
                }}
                initial ="hidden"
                animate ={mainControls}
                transition={{ duration: 0.5 ,delay: 0.25}} 
                className='div-1'></motion.div>
                <motion.div 
                variants={{
                    hidden: {opacity: 0,x:200},
                    visible: {opacity:1, x:0},
                }}
                initial ="hidden"
                animate ={mainControls}
                transition={{ duration: 0.5 ,delay: 0.25}}
                className='div-2'></motion.div>
            </div>
            <div className='Grid-Item2'>
                <div className='heading-3'>
                    <Reveal>
                        <h3>The Best Salon Since 2020</h3>
                    </Reveal>
                </div>
                <div className='heading-4'>
                    <Reveal>
                        <h2>WE WILL CHANGE<br/>YOUR OUT LOOKS</h2>
                    </Reveal>
                </div>
                <Reveal>
                    <p>Our Talented Specialist Are Ready To Share Their Secrets. Don&apos;t Loose This Opportunity</p>
                </Reveal>
                <div className='years'>
                    <div className='y-1'>
                        <Reveal>
                            <h4>22</h4>
                        </Reveal>
                        <Reveal>
                            <p>Years Of Experience</p>
                        </Reveal>
                    </div>
                    <div className='y-2'>
                    <Reveal>
                        <h4>10</h4>
                    </Reveal>
                    <Reveal>
                        <p>Awesome Exports</p>
                    </Reveal>       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Change