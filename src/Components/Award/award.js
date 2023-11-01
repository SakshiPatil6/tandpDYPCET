import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/awards/award1.jpg'
import image2 from '../Images/awards/award2.jpg'
import img3 from '../Images/awards/award3.jpg'
import img4 from '../Images/awards/award4.jpg'
import img5 from '../Images/awards/award5.jpg'
import img6 from '../Images/awards/award6.jpg'

function Award() {
    return (
        <Carousel style={{borderRadius: '50px', padding: 50, height:'90vh',width:'auto'}}>
            <Carousel.Item interval={2200}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    height="590px"
                // style={{padding: "5px"}}
                
                />
            </Carousel.Item >
            <Carousel.Item interval={2200}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                    height="590px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2200}>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    height="590px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2200}>
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="Forth slide"
                    height="590px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2200}>
                <img
                    className="d-block w-100"
                    src={img5}
                    alt="Fifth slide"
                    height="590px"
                />
            </Carousel.Item>
            <Carousel.Item interval={2200}>
                <img
                    className="d-block w-100"
                    src={img6}
                    alt="Fifth slide"
                    height="590px"
                />
            </Carousel.Item>
        </Carousel>

    );
}

export default Award;