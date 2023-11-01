import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import './About.css';

function LeftTabsExample() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="">
            <Row>
                <Col sm={2}>
                    <Nav variant="pills" className="flex-column mt-4 ml-4">
                        <Nav.Item>
                            <Nav.Link eventKey="first" >About T&P</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Objective</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Contact us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">Important Forms</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content className='tabcontent'>
                        <Tab.Pane eventKey="first">
                           <center><img src={"https://coek.dypgroup.edu.in/wp-content/uploads/photo-gallery/thumb/D_Y_Patil_College_of_Engg_&_Tech_kolhapur_(1).jpg"} className='aboutimag' alt="logo" /></center><br></br>
                            <p >The Training and Placement Cell of D Y Patil College of Engineering &amp; Technology, Kasaba Bawada, Kolhapur handles campus placement of the B Tech &amp; M Tech graduating students of all our campuses for Engineering. The Placement Cell provides complete support to the visiting companies at every stage of placement process. Arrangements for Pre-Placement Talks, Online/Offline Tests, Interviews and Group Discussions are made as per the requirement of the visiting companies.</p>
                            <p >The Training &amp; Placement Cell plays a crucial role in locating job opportunities for Under Graduates and Postgraduates passing out from the college by keeping in touch with reputed firms and industrial establishments. The Training &amp; Placement Cell operates round the year to facilitate contacts between companies and graduates. The number of students placed through the campus interviews is continuously rising. On invitation, many reputed industries visit the institute to conduct recruitment process.</p>
                            <p >We have been successful in maintaining our high placement statistics over the years and the fact that our students bear the recession blues with record breaking placements itself is a testimony to our quality. Our ingenious alumnae have set new standards in the corporate world through their estimable contributions and it is my firm conviction that we will continue that legacy in the years to come.</p>
                            <p >Our Institute is accredited by so many top companies from which they are visiting our college every year for conducting Placement Training programs and Campus Interviews.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            • To enhance the employability of DYPCET students by imparting necessary knowledge and skills through the best training initiatives rom first year to last year to meet the expectations of all types of Industries, with necessary interaction with the industry and alumni.<br /><br/>

                            • To arrange regular interaction with the industry through Seminars, Guest Lectures, Conferences, Corporate meets etc.<br /><br/>

                            • To strive for sheer diversity of recruiters and the job profiles across all domains and the sectors<br /><br/>

                            • To facilitate vigorous institute-industry collaborations for placement and internship opportunities<br /><br/>

                            • To collaborate with industry for live projects, Research work, Workshop or any academic alliance<br /><br/>

                            • To develop training and placement cell as a career counseling center.<br/><br/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Container>
                                <Row>
                                    <Col><img src={"https://coek.dypgroup.edu.in/wp-content/uploads/2020/10/Sudarshan-Sutar-1024x945.jpg"} className="contactimg1" alt="logo" /></Col>
                                    <Col className='infoo'>
                                        Prof. Sudarshan Narayan Sutar<br />
                                        <hr ></hr>
                                        Designation : Campus Training & Placement Officer<br />
                                        <hr ></hr>
                                        Contact No : +91-9890633345<br />
                                        <hr ></hr>
                                        Email ID : tpo@dypgroup.org <br /> tpodypatilkop@gmail.com
                                        

                                    </Col>
                                </Row>
                                <br/><br/><br/>
                                <Row>
                                    <Col><img src={"https://coek.dypgroup.edu.in/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-19-at-3.06.02-PM-300x277.jpeg"} className="contactimg1" alt="logo" /></Col>
                                    <Col className='infoo'>
                                        Prof. Makrand Sambhajirao Kaingade<br />
                                        <hr ></hr>
                                        Designation : Head Training<br />
                                        <hr ></hr>
                                        Contact No : 7798203060<br />
                                        <hr ></hr>
                                        Email ID :  training.dypcet@dypgroup.org<br />

                                    </Col>

                                </Row>
                            </Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                        <a href='https://acrobat.adobe.com/id/urn:aaid:sc:AP:67f201ac-ca26-497d-8da5-463fb1ccc978'>1. Vocational Training Form</a> <br /><br/>
                           <a href='https://acrobat.adobe.com/id/urn:aaid:sc:AP:eef85f8c-74bd-4efa-a8e7-9fa0b271abb2'>2. Industrial Internship Form</a> <br /><br/>
                            <a href='https://acrobat.adobe.com/id/urn:aaid:sc:AP:5a4d8702-37fc-4a8d-be8d-2edae8f22746'>3. FY Industrial Visit & Study Program Form</a><br /><br/>
                            <a href='https://acrobat.adobe.com/id/urn:aaid:sc:AP:3a135b45-6bfb-4c0a-b422-457bdf9062b5'> 4. First Year Industrial Visit Report</a><br /><br/>       

                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default LeftTabsExample;