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
                    <Description className="desc desc1" title = {"Intérieur"} content ={"Maison de "} />
                    <Description className="desc desc2" title = {"Extérieur"} content = {"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} />  
                    <Description className="desc desc3" title = {"Equipements disponibles"} content = {"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."} />
                    <Description className="desc desc4" title = {"Activités proches"} content = {"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />
                    <Description className="desc desc5" title = {"Localisation"} content = {"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />
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
