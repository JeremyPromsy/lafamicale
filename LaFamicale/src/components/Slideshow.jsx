import React, {useState} from "react";
import flecheDroite from "../assets/FlècheDroite.png";
import flecheGauche from "../assets/FlècheGauche.png";
import "../styles/slideshow.css"
import Img1 from "../Images/salon-1-LaFamicale.jpg"
import Img2 from "../Images/salon-2-LaFamicale.jpg"
import Img3 from "../Images/cuisine-cor--LaFamicale.jpg"
import Img4 from "../Images/chambre-parentale-LaFamicale.jpg"
import Img5 from "../Images/salle-eau-LaFamicale.jpg"
import Img6 from "../Images/ext-terrasse-LaFamicale.jpg"
import Img7 from "../Images/chambre-amis-2-LaFamicale.jpg"
import Img8 from "../Images/chambre-amis-LaFamicale.png"
import Img9 from "../Images/couloir-vert-LaFamicale.jpg"


const Slideshow = () => {
    const pictures = [
        Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    };

    return (
        <section id="gallery"> 
            

            {pictures.map((img, index) => {
                return (
                    <div key={index}> {index === current && (
                            <img src={img} alt="Photos du logement" className="gallery-image"/>
                        )}
                    </div>
                );
            })}
            <div className="fleche">
            {pictures.length > 1 && (
                <img src={flecheGauche} alt="left arrow" className="arrow-left" onClick={prevSlide}
                />
            )}
            {pictures.length > 1 && (
                <img src={flecheDroite} alt="right arrow" className="arrow-right" onClick={nextSlide}/>
            )}
            </div>
        </section>
    );
}

export default Slideshow;
