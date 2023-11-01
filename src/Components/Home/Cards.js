import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import p from '../Images/p6.jpg'
import './Cards.css'
export const Cards = () => {
    return (
        // <div className='cards-container'>
        //     <CardGroup className="card-group-spacing">
        //         <Card border="primary" className="card-width">
        //             <Card.Header>Welcome</Card.Header>
        //             <Card.Body>
        //                 <Card.Title>About DYP, Kolhapur</Card.Title>
        //                 <Card.Text>
        //                     The DYP stands as a beacon of light to guide the younger generation of the day on the right path to fulfilment in career and life. The USP of the University is its research based curriculum and academically oriented teaching staff. The world class ambience and infrastructure helps the students to easily accommodate themselves in an environment that is conducive to the teaching- learning process.
        //                 </Card.Text>
        //             </Card.Body>
        //         </Card>
        //         <br />

        //         {/* <Card border="primary" style={{ width: '36rem' }}> */}
        //         <Card border="primary" className="card-width">
        //             <Card.Header>News/Announcement/Events</Card.Header>
        //             <Card.Body>
        //                 <Card.Title>Secondary Card Title</Card.Title>
        //                 <Card.Text>
        //                     {/* <AnnouncementSlider/> */}
                            
        //                     {/* Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content. */}
        //                 </Card.Text>
        //             </Card.Body>
        //         </Card>
        //         <br />

        //         {/* <Card border="success" style={{ width: '50rem' }}>
        //             <Card.Header>Header</Card.Header>
        //             <Card.Body>
        //                 <Card.Title>Success Card Title</Card.Title>
        //                 <Card.Text>
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                 </Card.Text>
        //             </Card.Body>
        //         </Card> */}
        //         {/* <br /> */}
        //     </CardGroup>
        // </div>

        <>
             <section className="about" id="about">
            <div className='container'>
           
                <h3 className="heading">About Us</h3>
              
                    </div>
                <div className="row">
                    <div className="imageAbout">
                        <img src={p} alt='ABoutImage'></img>
                    </div>
                    <div className="contentAbout">
                        <h3>About DYP, Kolhapur</h3>
                        <p>The DYP stands as a beacon of light to guide the younger generation of the day on the right path to fulfilment in career and life. The USP of the University is its research based curriculum and academically oriented teaching staff. The world class ambience and infrastructure helps the students to easily accommodate themselves in an environment that is conducive to the teaching- learning process.
                        </p>
                        
                       
                    </div>
                </div>
                </section>
               
        </>
    )
}