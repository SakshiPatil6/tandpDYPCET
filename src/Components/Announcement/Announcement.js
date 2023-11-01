import React from 'react';
import { useState, useEffect } from 'react';
import './AnnouncementSlider.css'; 
import axios from 'axios';
function AnnouncementSlider()
{
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/readAnnouncement')

      .then(res => {
        setData([
          res.data[0].a1,
          res.data[0].a2,
          res.data[0].a3
        ]);
      })
      .catch(err => console.log(err));
  }, [])
  
  return (
    <div className="announcement-slider-container">

      {data.map((announcement, index) => {
        return <div key={index}>
          <div className='announcement-slide'>{ announcement}</div>

        </div>
      })}
     

    </div>
  );
}

export default AnnouncementSlider;
