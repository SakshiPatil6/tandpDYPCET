import { useState } from 'react';
import axios from 'axios';
import './AddStudents.css';
function AddStudents() {
    const [file, setFile] = useState();
    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const [values, setValues] = useState({
        name: '',
        company: '',
        studDetails: ''
    })

    const onHandleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('image', file);
        formdata.append('name', values.name);
        formdata.append('company', values.company);
        formdata.append('studDetails', values.studDetails);
        axios.post('http://localhost:8081/upload', formdata)
            .then(res => {

                console.log("Image uploaded", res)
                alert("Image uploaded!")
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="container">
            <h1 className="heading">Upload Student Placed Record</h1>
            <div className="box-container UploadContainer">
                <div className="box">

                    <input type="file" onChange={handleFile} /><br />
                    <input type='text' placeholder='Enter student name' onChange={onHandleChange} name='name' /><br />
                    <input type='text' placeholder='Enter comapny name' onChange={onHandleChange} name='company' /><br />
                    <input type='text' placeholder='Enter student details' onChange={onHandleChange} name='studDetails' /><br />
                    <button onClick={handleUpload}>Upload</button>
                </div>
            </div>
        </div>
    );
}
export default AddStudents;