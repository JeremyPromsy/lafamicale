import React from "react";
import "../styles/home.css"
import Slideshow from "../components/Slideshow";
import Description from "../components/Description";
import Location from "../components/Location"
import FormContact from "../components/FormContact"

function Home () {
    return (
        <div className="home">
           <Slideshow />
           <Description />
           <Location />
           <FormContact />
        </div>
    )
}

export default Home;