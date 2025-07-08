import React from 'react';
import ContactCard from '../components/ContactCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Contact() {
  const navigate = useNavigate();
   const [contacts, setContacts] = useState([]);

   useEffect(() => {
    fetch("https://playground.4geeks.com/contact/agendas/rabel")
      .then(response => response.json())
       .then(data => {
        console.log("Datos recibidos del backend:", data); // ✅ dentro del .then
        setContacts(data.contacts); // asegúrate de que 'data' es un array aquí
      })
      .catch(error => console.error("Error al cargar contactos:", error));
       
  }, []);

  const handleDelete = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };
 

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-4">
         <button className="btn btn-success" onClick={() => navigate("/AddContact")}>
          Add new Contact
        </button>
      </div>

      <div className="contact-list mb-5">
       {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            id={contact.id}
            img={`https://picsum.photos/seed/${contact.id}/200`}
            name={contact.name}
            ubicacion={contact.address}
            tlf={contact.phone}
            email={contact.email}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
