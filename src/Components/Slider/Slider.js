import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from '../Images/p1.jpg'
import img2 from '../Images/p2.jpg'
import img3 from '../Images/p3.jpg'
// import "./Slider.css";
const Slider = () => {
    return (
        <div className="car-main" style={{padding:0}}>
            <Carousel style={{ padding: 20}}>
                <Carousel.Item interval={2200} style={{borderRadius:'20px'}}>
                    <img
                        className="d-block w-100 img-slider"
                        src={img1}
                        alt="First slide"
                        style={{borderRadius:'20px'}}
                    />
                   
                </Carousel.Item>
                <Carousel.Item interval={2200}>
                    <img
                        className="d-block w-100 img-slider"
                        src={img2}
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={2200}>
                    <img
                        className="d-block w-100 img-slider"
                        src={img3}
                        alt="Third slide"
                    />
                   
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Slider;