import React, { useRef } from 'react';
import "../styles/formcontact.css"
import emailjs from '@emailjs/browser';

const ServiceID = "service_n6f1yqc";
const TemplateID = "Lafamicale-template";
const PublicKey = "A8cBtp8O8D3ahNq6u";
console.log(ServiceID, TemplateID, PublicKey)

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
            <h1>Contact Form</h1> 
            <form className='cf' ref={form} onSubmit={sendEmail}>
                <div className='half left cf'> 
                    <input type='text' placeholder='Name' name='user_name' /> 
                    <input type='email' placeholder='Email address' name='user_email' /> 
                </div> 
                <div className='half right cf'> 
                    <textarea name='message' type='text' placeholder='Message'></textarea> 
                </div> 
                    <input type='submit' value='Submit' id='input-submit' />
            </form>
        </div> 
    ); 
} 

export default App;
