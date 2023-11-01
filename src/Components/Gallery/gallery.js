import React, { useState, useEffect } from "react";
import axios from "axios";
import './gallery.css'
export const Gallery = () => {


    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/readImgGallery')
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (data) => {
        setTempImgSrc(data);
        setModel(true);
    }
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Image Gallery</h1>
            <h2 style={{ textAlign: 'center' }}>DYPCET</h2>

             <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} />
                {/* <CloseIcon onClick={()=>setModel(false)}/> */}
             </div> 
            <div className="gallery">
                {data.map((gallery, index) => {
                    return <div key={index}>
                        <div className="pics" onClick={()=> getImg(`http://localhost:8081/imgGallery/${gallery.img}`) }>
                         
                            <img src={`http://localhost:8081/imgGallery/${gallery.img}`} alt="img" style={{ width: '100%' }}/>
                        </div>
                    </div>
                }
                )}

            </div>
        </>
    )
}
