import React, { useState, useRef } from 'react';
import "../styles/formcontact.css"
import emailjs from '@emailjs/browser';

const ServiceID = "service_n6f1yqc";
const TemplateID = "Lafamicale-template";
const PublicKey = "A8cBtp8O8D3ahNq6u";

const ContactForm = () => {
const formRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [objet, setObjet] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Valeurs avant envoi:', name, email, message);
    emailjs
    .sendForm(
        ServiceID, TemplateID, formRef.current, PublicKey,
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
    setName('');
    setEmail('');
    setObjet('');
    setMessage('');
  };

  return (
    <div className='pageFormulaire'>
    <div className='formulaire'>
    <form ref={formRef} onSubmit={handleSubmit}>
      <input
        name="user_name"
        className='champNom'
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        name="user_email"
        className='champMail'
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /> 
      <input
        name="user_objet"
        className='champObjet'
        type="text"
        placeholder="Objet"
        value={objet}
        onChange={(e) => setObjet(e.target.value)}
        required
      />
      <textarea
        name="user_message"
        className='message'
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button className='boutonEnvoyer' type="submit">Envoyer</button>
    </form>
    </div>
    </div>
  );
};

export default ContactForm;
