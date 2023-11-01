import React from "react";
import Slider from "../Slider/Slider";
import { Cards } from "./Cards";
import Management from "./Management";
import AnnouncementSlider from "../Announcement/Announcement";
export const Home = () => {
    return (
        <div>
            <Slider/>
            <br/>
            <Cards/>
            <br/>
            
            <Management />
            <div>
            <AnnouncementSlider />
            </div>
            
        </div>
    )
}
