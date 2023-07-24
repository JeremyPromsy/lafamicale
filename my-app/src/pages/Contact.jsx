import React from "react";
import "../styles/contact.css"

function Contact() {
    return (
        <div className="Contact">
            <div class="bloc bgc-white l-bloc" id="bloc-7">
	            <div class="container bloc-lg">
	                <div class="row">
		                <div class="col-sm-6">
		                    <form id="form_1" novalidate="" success-msg="Ton message a été envoyé" fail-msg="Désolé, il semble que notre serveur de messagerie ne réponde pas, veuillez nous excuser pour le dérangement !" class="error">
			            <div class="form-group">
			                <label> Nom </label>
			                    <input id="name" name="name" class="form-control" required aria-required="true" aria-label="Indiquez votre nom"></input>
		                </div>
			            <div class="form-group">
			                <label> Adresse email </label>
			                    <input id="email" class="form-control" type="email" required  placeholder="example@mail.com" aria-required="true" aria-label="Indiquez votre mail"></input>
		                </div>
			            <div class="form-group">
			                <label> Comment nous avez-vous connu ? </label>
			                    <input class="form-control" type="text" required  id="input_504" aria-required="true" aria-label="Indiquez comment vous nous avez connu"></input>
			            </div>
			            <div class="form-group">
			                <label>Brief de votre projet (Ajoutez autant de détails que nécessaire) </label><textarea id="message" class="form-control" rows="4" cols="50" required aria-required="true" aria-label="décrivez votre projet avec des détails"></textarea>
			            </div>
			            <button class="bloc-button btn btn-lg btn-block cta-hero btn-atomic-tangerine" type="submit" aria-label="envoyez votre message">
			                Envoyer </button>
		                    </form>
		            </div>
			        <div class="col-sm-6">
				    <p><a href="mailto:contact@agencelapanthere.com"  aria-label="contacter l'agence par mail">contact@agencelapanthere.com</a></p>
				        <p>2 place Sathonay 69001 Lyon
				        Ouvert de 9h à 18h, du lundi au vendredi</p>
			        </div>
		        </div>
	        </div>
        </div>
        <iframe title="Carte Google de la maison" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.341197027814!2d-1.2419783237915833!3d45.86448290664226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48016031fc8ca085%3A0xa78586535766efbe!2s28%20Grande%20Rue%2C%2017370%20Le%20Grand-Village-Plage!5e0!3m2!1sfr!2sfr!4v1689868674049!5m2!1sfr!2sfr" className="Google" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Contact ;


