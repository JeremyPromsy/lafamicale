import React from "react";
import "../styles/contact.css"
import FormContact from "../components/FormContact"

function Contact() {
  return (
    <div className="pageInfo">
    <div className="contactPage">
      <div className="contactDiv">
        <h2>Contactez-nous !</h2>
        <FormContact />
        <div className="boutonMail">
        <p>Ou envoyez-nous un mail directement, <br></br>si vous le souhaitez, en cliquant sur le bouton ci-dessous.</p>
        <p><a href="mailto:lafamicale@gmail.com"  aria-label="contacter l'agence par mail"><button className="buttonContact">Nous joindre </button></a></p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;


