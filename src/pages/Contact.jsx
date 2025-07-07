import React from 'react';
import ContactCard from '../components/ContactCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Contact() {
  const navigate = useNavigate();
   const [contacts, setContacts] = useState([]);

   useEffect(() => {
    fetch("https://playground.4geeks.com/contact/agendas/agenda_prueba")
      .then(response => response.json())
       .then(data => {
        console.log("Datos recibidos del backend:", data); // ✅ dentro del .then
        setContacts(data.contacts); // asegúrate de que 'data' es un array aquí
      })
      .catch(error => console.error("Error al cargar contactos:", error));
       
  }, []);

 

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-4">
         <button className="btn btn-success" onClick={() => navigate("/AddContact")}>
          Add new Contact
        </button>
      </div>

      <div className="contact-list">
       {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            img={`https://picsum.photos/seed/${contact.id}/200`}
            name={contact.name}
            ubicacion={contact.address}
            tlf={contact.phone}
            email={contact.email}
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
