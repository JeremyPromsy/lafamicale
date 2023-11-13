import React from "react";
import "../styles/contact.css"
import FormContact from "../components/FormContact"

function Contact() {
  return (
    <div className="pageInfo">
    <FormContact />
    <div className="contactPage">
      <div className="contactDiv">
        <h2>Contactez-nous !</h2>
        <p>Ou envoyez un mail directement, si vous le souhaitez en cliquant sur le bouton, ci-dessous.</p>
        <p><a href="mailto:lafamicale@gmail.com"  aria-label="contacter l'agence par mail"><button className="buttonContact">Nous joindre </button></a></p>
      </div>
      <div className="contactGoogle">
        <iframe title="Carte Google de la maison" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.341197027814!2d-1.2419783237915833!3d45.86448290664226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48016031fc8ca085%3A0xa78586535766efbe!2s28%20Grande%20Rue%2C%2017370%20Le%20Grand-Village-Plage!5e0!3m2!1sfr!2sfr!4v1689868674049!5m2!1sfr!2sfr" className="Google" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </div>
  );
}

export default Contact;


