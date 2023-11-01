import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
function StudentPlaced23() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/readImg')

            .then(res => {
                //const imageArrayBuffer = res.data[0].image;

                //const blob = new Blob([imageArrayBuffer], { type: 'image/jpeg' });
                //console.log(res.data[0].image.data)
                //we are converting blob to img here -- >
                //console.log("Sakshi here ")
                //console.log("Here goes : ")
                //const dataURL = URL.createObjectURL(blob);
                //console.log(`dataURL is ${dataURL}`);
                console.log(res.data[0].name)
                console.log(res.data[0].image)
                console.log(res.data[0].company)
                //imgName = res.data[0].image;

                // setData({
                //     name: res.data[0].name,
                //     image: res.data[0].image,
                //     company: res.data[0].company,
                //     studDetails: res.data[0].studDetails
                // });
                setData(res.data);
                //console.log(imgName);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <div className="container">
                <h1 className="heading">Placement Record</h1>
                <div className="box-container">

                    {data.map((addstudplaced, index) => {
                        return <div key={index}>
                            <div className="box">
                                <img src={`http://localhost:8081/images/${addstudplaced.image}`} alt="img"></img>
                                <h3>{addstudplaced.name}</h3>
                                <p>
                                    Company: {addstudplaced.company}<br />
                                    Student Details: {addstudplaced.studDetails}
                                </p>
                               
                            </div>

                        </div>
                    })}





                    {/* <div className="box">
                        <img src={`http://localhost:8081/images/${data.image}`}></img>
                        <h3>{data.name}</h3>
                        <p>
                            Company: {data.company}<br />
                            Student Details: {data.studDetails}
                        </p>
                        <Button href='#' className='btn'>Read More</Button>
                    </div>
                    <div className="box">
                        <img src={data.image}></img>
                        <h3>{data.name}</h3>
                        <p>
                            Company: {data.company}<br />
                            Student Details: {data.studDetails}
                        </p>
                        <Button href='#' className='btn'>Read More</Button>
                    </div> */}
                </div>
                <br /><br />
                <Button className='btn back-btn-studplaced' as={Link} to={"/drop"}>Back</Button>

            </div>
            {/* <img src={data.image} alt="student"></img>  
            <p>Name: {data.name}</p>
            <p>Company: {data.company}</p>
            <p>Student Details: {data.studDetails}</p> */}
        </>
    );
}
export default StudentPlaced23;