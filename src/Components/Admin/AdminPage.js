import './StudentDetails.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import StudentDetails from './StudentDetails';
import AddAnnouncement from './AddAnnouncement';
import AddGallery from './AddGallery';
import AddStudents from './AddStudents';
function AdminPage() {

    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column mt-4 ml-4">
                            <Nav.Item>
                                <Nav.Link eventKey="first" >Students Details</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Add Students</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Add Announcement</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="four">Add Gallery</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className='tabcontent'>
                            <Tab.Pane eventKey="first">
                                <StudentDetails/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <AddStudents/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <AddAnnouncement/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="four">
                                <AddGallery/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>


        </>
    );
}
export default AdminPage;