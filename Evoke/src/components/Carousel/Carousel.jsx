import React from 'react'
import Carouselimg from "../../assets/Images/Loreal.png"
import "./Carousel.css";

const Carousel = () => {
    return(
        <div className="slider">
            <div className="slide-track">
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>

                {/* doubles */}
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
                <div className="slide">
                    <img src={Carouselimg} />
                </div>
            </div>
        </div>
    )
}

export default Carousel
