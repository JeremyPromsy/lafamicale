import React from "react";
import "../styles/photos.css"

import Img1 from "../Images/salon-1-LaFamicale.jpg"
import Img2 from "../Images/salon-2-LaFamicale.jpg"
import Img3 from "../Images/cuisine-cor--LaFamicale.jpg"
import Img4 from "../Images/chambre-parentale-LaFamicale.jpg"
import Img5 from "../Images/salle-eau-LaFamicale.jpg"
import Img6 from "../Images/ext-terrasse-LaFamicale.jpg"
import Img7 from "../Images/chambre-amis-2-LaFamicale.jpg"
import Img8 from "../Images/chambre-amis-LaFamicale.png"
import Img9 from "../Images/couloir-vert-LaFamicale.jpg"

function galeriePhoto() {
    <div id="galeriePhoto" className="galeriePhoto"> 
        <img className="photo photo1" src= {Img1} alt ="Salon La Famicale" /> 
        <img className="photo photo2" src= {Img2} alt ="Salon La Famicale" />
        <img className="photo photo3" src= {Img3} alt ="Cuisine La Famicale" />
        <img className="photo photo4" src= {Img4} alt ="Chambre Parentale La Famicale" />
        <img className="photo photo5" src= {Img5} alt ="Salle d'eau La Famicale" />
        <img className="photo photo6" src= {Img6} alt ="Terrasse La Famicale" />
        <img className="photo photo7" src= {Img7} alt ="Chambre amis La Famicale" />
        <img className="photo photo8" src= {Img8} alt ="Chambre amis La Famicale" />
        <img className="photo photo9" src= {Img9} alt ="Couloir La Famicale" />
    </div>
}

export default galeriePhoto ;