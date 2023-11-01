import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './read.css';
import { Link } from 'react-router-dom';

function ReadStudent() {
    const { id } = useParams();
    const [student, setStudent] = useState([])
    useEffect(() => {
        axios.post('http://localhost:8081/readID/' + id)
            .then(res => {
                console.log(res);
                setStudent(res.data)
            })
            .catch(err => {
                console.log(err);
                // alert("Fail");
            });
    }, [])
    return (
        <div className="readStudentByIdMain">
        <div className="readStudentByIdContainer mt-5">
            {student.length > 0 ? (
                <>
                    <p>ID:<b> {student[0].id}</b></p>
                    <p>Username: <b>{student[0].Username}</b></p>
                    <p>Email:<b> {student[0].Email}</b></p>
                    <p>Password:<b> {student[0].Password}</b></p>
                    <Link to='/StudentDetails' className='btn btn-sm btn-outline-secondary readStudentByIdBtn'>Back</Link>
                </>
            ) : (
                <p>No student data available</p>
            )}

            
        </div>
        </div>

    );
}
export default ReadStudent;