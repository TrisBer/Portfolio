/* eslint-disable */
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_roj3lf8', 'template_1fs0iu7', form.current, 'dxQv9NCqd-a9Qzb2f')
      .then((result) => {
          console.log(result.text);
          alert('Message envoyé avec succès!');
      }, (error) => {
          console.log(error.text);
          alert('Une erreur s\'est produite, veuillez réessayer.');
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="subject">Objet du contact</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Votre message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;