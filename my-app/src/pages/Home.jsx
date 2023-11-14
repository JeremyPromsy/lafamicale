import React from "react";
import "../styles/home.css"
import Slideshow from "../components/Slideshow";
import Location from "../components/Location"
import FormContact from "../components/FormContact"

function Home () {
    return (
        <div className="home">
            <div className="imagesHome">
            <h2>Quelques images</h2>
           <Slideshow />
           </div>
           <div className="calendrierHome">
           <Location />
           </div>
           <div className="contactHome">
           <h2>Contactez-nous !</h2>
           <FormContact />
           </div>
        </div>
    )
}

export default Home;