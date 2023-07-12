import React from "react";
import "../styles/home.css"
import Slideshow from "../components/Slideshow";
import Description from "../components/Description";

function Home () {
    return (
        <div className="home">
           <Slideshow />
           <Description />
        </div>
    )
}

export default Home;