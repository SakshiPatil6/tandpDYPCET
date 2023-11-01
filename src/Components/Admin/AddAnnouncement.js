import { useState } from 'react';
import axios  from 'axios';
function AddAnnouncement() {
    const [values, setValues] = useState({
        a1: '',
        a2: '',
        a3: ''
    })

    const onHandleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    const handleUpload=(event) => {
        event.preventDefault();
        axios.post(process.env.REACT_APP_BASE_URL+'/uploadAnnouncement', values)
            .then(res => {
                console.log("Announcement Uploaded!", res);
                alert("Announcement Uploaded!");
            })
            .catch(err => {
                console.log("failed", err);
               
            });
    }
    return (
        <>
            <div className="container">
                <h1 className="heading">Upload Announcement</h1>
                <div className="box-container UploadContainer UploadContainer-Announcement">
                    <div className="box">
                        {/* <div className="UploadContainer UploadContainer-Announcement"> */}
                            <input type='text' placeholder='First Announcement' name='a1' onChange={onHandleChange}/><br />
                            <input type='text' placeholder='Second Announcement' name='a2' onChange={onHandleChange}/><br />
                            <input type='text' placeholder='Third Announcement' name='a3' onChange={onHandleChange}/><br />
                            <button onClick={handleUpload}>Upload</button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddAnnouncement;