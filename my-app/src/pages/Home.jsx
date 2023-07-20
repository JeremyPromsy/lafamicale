import React from "react";
import "../styles/home.css"
import Slideshow from "../Images/components/Slideshow";
import Description from "../Images/components/Description";

function Home () {
    return (
        <div className="home">
           <Slideshow />
           <Description />
        </div>
    )
}

export default Home;