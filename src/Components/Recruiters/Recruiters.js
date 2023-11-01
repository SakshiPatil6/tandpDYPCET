import React from 'react';
import './Recruiters.css'
import RecImages from '../Images/Recruiters/ZYCUS.jpg';
import zopper from '../Images/Recruiters/Zopper.png';
import tata from '../Images/Recruiters/tata.jpg';
import ubi from '../Images/Recruiters/ubi.png';
import te from '../Images/Recruiters/te.png';
import skl from '../Images/Recruiters/SLK.png';
import ms from '../Images/Recruiters/Microsoft.jpg';
import bc from '../Images/Recruiters/barclays.png';
import hex from '../Images/Recruiters/Hexaware.png';
const Recruiters = () => {
    return (
        <div className="container rcontainer">
            <h1 className="heading">Our Recruiters</h1>
            <div className="box-container recruiters">
                <div className="box rBox">
                    <img src={RecImages}></img>
                </div>
                <div className="box rBox">
                    <img src={zopper}></img>
                </div>
                <div className="box rBox">
                    <img src={tata}></img>

                </div>
                <div className="box rBox">
                    <img src={ubi}></img>

                </div>
                <div className="box rBox">
                    <img src={te}></img>

                </div>
                <div className="box rBox">
                    <img src={skl}></img>

                </div>
                <div className="box rBox">
                    <img src={ms}></img>
                </div>

                <div className="box rBox">
                    <img src={bc}></img>
                </div>


                
                
            </div>
        </div>
    );
};

export default Recruiters;