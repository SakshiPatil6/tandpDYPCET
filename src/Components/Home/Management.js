import React from "react";
import "./Management.css"
import img1 from "../Images/M Kaingade.jpg"
import img2 from "../Images/Sudarshan-Sutar.jpg"
import img3 from "../Images/Honble-Sanjay-saheb.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Management = () => {
    return (
        <div className="cards-container">
            <div className="container">
                <div className="heading">Management</div>
            </div>
            <Card className="cards-main" style={{ width: '24rem' }}>
                <Card.Img variant="top" src={img3} style={{ height: "355px", width: "100%" }}/>
                <Card.Body className="text-center">
                    <Card.Title>Dr. Sanjay D.Patil</Card.Title>
                    <Card.Text>
                        <span>Designation : Chairman</span><br/>
                        <span>Contact No : +91-0000000000</span><br/>
                        <span>Email ID : dypatilkop@gmail.com</span><br/>
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={img2} />
                <Card.Body className="text-center">
                    <Card.Title>Prof. Sudarshan Narayan Sutar</Card.Title>
                    <Card.Text>
                        <span>Designation : Campus T & P Officer</span><br/>
                        <span>Contact No : +91-9890633345</span><br/>
                        <span>Email ID : tpodypatilkop@gmail.com</span><br/>
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={img1} style={{ height: "335px", width: "100%" }} />
                <Card.Body className="text-center">
                    <Card.Title>Prof. Makrand Sambhajirao Kaingade</Card.Title>
                    <Card.Text>
                        <span>Designation : Head Training</span><br/>
                        <span>Contact No : +91-7798203060</span><br/>
                        <span>Email ID :  training.dypcet@dypgroup.org</span><br/>
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Management;
