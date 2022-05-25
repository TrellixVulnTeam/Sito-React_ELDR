import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState("Invia");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sto inviando...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    
    <div class="contact-wrapper">
    <div class="contact-form">
        <h3>Contattaci</h3>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="name"> Nome</label>
                <input type="text" id="name" name="name" required/>
            </p>

            <p>
                <label htmlFor="email">Email </label>
                <input type="email" id="email" name="email" required/>
            </p>
            
            <p>
            <label htmlFor="phone">Telefono </label>
                <input type="tel" id="phone" name="phone" required/>
            </p>

            <p class="block">
              <label htmlFor="message">Messaggio</label>
              <textarea id="message" required />
            </p>

            <p class="block" >
            <button type="submit">{status}</button>
            </p>
    </form>
    </div>

    <div class="contact-info">
        <h4>Informazioni</h4>
        <ul>
            <li><i class="fas fa-map-marker-alt"></i> Via ****, Catania </li>
            <li><i class="fas fa-phone"></i> +39 12345657  </li>
            <li> <i class="fas fa-envelope-open-text"></i> ****@gmail.com</li>
        </ul>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis recusandae unde quidem numquam minus voluptas
            voluptatem aspernatur excepturi, ab porro. Doloremque,
            amet ipsam? Repudiandae ab, quis rem tempore maiores non!
        </p>
    </div>
</div>
  

  );
};

export default Contact;