import axios from "axios";
import { useState } from "react";
function AddGallery() {
    const [file, setFile] = useState();
    const handleFile = (e) => {
        setFile(e.target.files[0])
    }
    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('image', file);
        axios.post('http://localhost:8081/uploadImageGallery', formdata)
            .then(res => {
                console.log("Image uploaded", res)
                alert("Image Uploaded!!")
            })
            .catch(err => console.log(err))
    }
    
    return (
        <>
            <div className="container">
                <h1 className="heading">Upload Gallery Pictures</h1>
                <div className="box-container UploadContainer UploadContainer-Gallery">
                    <div className="box">
                       
                            <input type='file'  name='image' alt="img" onChange={handleFile}/><br />
                            <button onClick={handleUpload}>Upload</button>
                     
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddGallery;