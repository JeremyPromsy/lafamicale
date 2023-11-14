import React from "react";
import "../styles/photos.css"
import 'lightbox.js-react/dist/index.css'

import {SlideshowLightbox} from 'lightbox.js-react'

import Img1 from "../Images/salon-1-LaFamicale.jpg"
import Img2 from "../Images/salon-2-LaFamicale.jpg"
import Img3 from "../Images/cuisine-cor--LaFamicale.jpg"
import Img4 from "../Images/chambre-parentale-LaFamicale.jpg"
import Img5 from "../Images/salle-eau-LaFamicale.jpg"
import Img6 from "../Images/ext-terrasse-LaFamicale.jpg"
import Img7 from "../Images/chambre-amis-2-LaFamicale.jpg"
import Img8 from "../Images/chambre-amis-LaFamicale.png"
import Img9 from "../Images/couloir-vert-LaFamicale.jpg"


function EspacePhoto () {
    return (
    <div className="photosGal">
    <div id="galeriePhoto" className="galeriePhoto"> 
        <div className="galeriePhoto1">
        <SlideshowLightbox className="container1">
            <img className="photo photo1 w-full rounded" src= {Img1} alt ="Salon La Famicale" /> 
            <img className="photo photo2 w-full rounded" src= {Img2} alt ="Salon La Famicale" />
        </SlideshowLightbox>
        </div>
        <div className="galeriePhoto2">
        <SlideshowLightbox className="container2">
            <img className="photo photo3 w-full rounded" src= {Img3} alt ="Cuisine La Famicale" />
            <img className="photo photo5 w-full rounded" src= {Img5} alt ="Salle d'eau La Famicale" />
        </SlideshowLightbox>
        </div>
        <div className="galeriePhoto3">
        <SlideshowLightbox className="container3">
            <img className="photo photo4 w-full rounded" src= {Img4} alt ="Chambre Parentale La Famicale" />
            <img className="photo photo6 w-full rounded" src= {Img6} alt ="Terrasse La Famicale" />
        </SlideshowLightbox>
        </div>
        <div className="galeriePhoto4">
        <div className="galeriePhoto5">
        <SlideshowLightbox className="container4">
            <img className="photo photo7 w-full rounded" src= {Img7} alt ="Chambre amis La Famicale" />
            <img className="photo photo8 w-full rounded" src= {Img8} alt ="Chambre amis La Famicale" />
        </SlideshowLightbox>
        </div>
        <SlideshowLightbox className="container5">
            <img className="photo photo9 w-full rounded" src= {Img9} alt ="Couloir La Famicale" />
        </SlideshowLightbox>
        </div>
    </div>
    </div>

    )
}

export default EspacePhoto;
