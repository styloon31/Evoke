import React from 'react'
import "./Instagram.css"
import { Reveal } from '../Reveal/Reveal1'

const Instagram = () => {
  return (
    <div className='Instagram-container container'>
        <div className='Insta-heading'>
            <Reveal >
                <h2>Follow us on INSTAGRAM</h2>
            </Reveal>
        </div>
        <div className='Insta-grid'>
            <div className='Insta-item1'>
                <div className='item-1'>

                </div>
                <div className='item-2'>

                </div>
            </div>
            <div className='Insta-item2'>

            </div>
            <div className='Insta-item3'>
                <div className='item-1'>

                </div>
                <div className='item-2'>

                </div>
            </div>
            <div className='Insta-item4'>
                <div className='item-1'>

                </div>
                <div className='item-2'>

                </div>
            </div>
        </div>
        <div className='btn-container'> 
            <button className='Insta-btn'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29 2H11C6.02944 2 2 6.02944 2 11V29C2 33.9706 6.02944 38 11 38H29C33.9706 38 38 33.9706 38 29V11C38 6.02944 33.9706 2 29 2Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M29.9005 10.0994H29.9185M27.2005 18.8654C27.4227 20.3634 27.1668 21.8934 26.4693 23.2376C25.7718 24.5818 24.6682 25.6719 23.3155 26.3528C21.9627 27.0336 20.4298 27.2706 18.9346 27.03C17.4394 26.7894 16.0581 26.0835 14.9873 25.0127C13.9164 23.9418 13.2105 22.5605 12.9699 21.0654C12.7293 19.5702 12.9663 18.0372 13.6471 16.6844C14.328 15.3317 15.4181 14.2281 16.7623 13.5306C18.1066 12.8331 19.6365 12.5772 21.1345 12.7994C22.6626 13.026 24.0773 13.738 25.1696 14.8303C26.2619 15.9226 26.974 17.3373 27.2005 18.8654Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> Follow Us
            </button>
        </div>
    </div>
  )
}

export default Instagram