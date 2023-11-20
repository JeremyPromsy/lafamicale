import React from "react";
import Description from "../components/Description";
import "../styles/informations.css"

function Infos () {
    return (
            <div className="info">
                <div className="infosTitre">
                    <h1>Plus d'informations sur la maison</h1>
                </div>
                <div className="contentDescription">
                    <Description className="desc desc1" title = {"Intérieur"} 
                    content ={
                    <p>Maison de 110m2
                    <br></br>3 chambres  
                    <br></br>Suite parentale et sa baignoire
                    <br></br>Un salon-salle à manger
                    <br></br>Grande cuisine
                    <br></br>Une salle d'eau
                    <br></br>Toilettes séparées 
                    </p>
                    } />
                    <Description className="desc desc2" title = {"Extérieur"} 
                    content ={
                    <p>Deux terrasses
                    <br></br>Une pergola
                    <br></br>Une douche extérieur
                    <br></br>Un terrain de pétanque 
                    <br></br>Parking plusieurs places 
                    </p>
                    } /> 
                    <Description className="desc desc3" title = {"Equipements disponibles"} 
                    content ={
                    <p>Barbecue disponible
                    <br></br>Vélos mis à disposition
                    <br></br>Boules de pétanque
                    </p>
                    } /> 
                    <Description className="desc desc4" title = {"Activités proches"} 
                    content ={
                    <p>Plage à 15 minutes à pied
                    <br></br>Ecoles de surf à proximité
                    <br></br>Loueurs de vélo à proximité
                    <br></br>Restaurants à 5 minutes à pied
                    <br></br>Port des salines à 10 minutes
                    </p>
                    } /> 
                    <Description className="desc desc5" title = {"Localisation"} 
                    content ={
                    <p>La maison est située à Grand-Village-Plage, sur l'île d'Oléron
                    <br></br>Situé entre Dolus et Saint-Trojan
                    <br></br>Proche des plages 
                    <br></br>Supermarché proche
                    </p>
                    } /> 
                </div>
                <div className="carteGoogle">
                    <div className="contactGoogle">
                    <iframe title="Carte Google de la maison" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.369272704565!2d-1.243890712126205!3d45.86392113213182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4801603202142d85%3A0x69bfd12f3754a5d!2sGrande%20Rue%2C%2017370%20Le%20Grand-Village-Plage!5e0!3m2!1sfr!2sfr!4v1700063600146!5m2!1sfr!2sfr" className="Google" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Infos;
