import React, { useRef } from 'react';
import "../styles/formcontact.css"
import emailjs from '@emailjs/browser';

const ServiceID = "service_n6f1yqc";
const TemplateID = "Lafamicale-template";
const PublicKey = "A8cBtp8O8D3ahNq6u";

function App() { 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                ServiceID,
                TemplateID,
                form.current,
                PublicKey,
            )
            .then(
                (result) => {
                    alert('Votre message est envoyé, merci, nous vous répondrons au plus vite :)');
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return ( 
        <div> 
            <h2>Contact Form</h2> 
            <form className='formulaire' ref={form} onSubmit={sendEmail}>
                <div className='champNomMail'> 
                    <input className='champNom' placeholder='Votre nom*' name='user_name' /> 
                    <input className='champMail' placeholder='Votre adresse mail*' name='user_email' /> 
                </div> 
                <div className='messageAuteur'> 
                    <textarea className='message' placeholder='Votre message ici' name='text' > </textarea> 
                </div> 
                    <input className='boutonEnvoyer' value='Send' id='input-submit' placeholder='Envoyer' type="submit" />
            </form>
        </div> 
    ); 
} 

export default App;
