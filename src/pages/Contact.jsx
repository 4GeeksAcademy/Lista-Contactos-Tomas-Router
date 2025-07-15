import React from 'react';
import ContactCard from '../components/ContactCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useList } from '../context/ListContext';
import { ObtenerContactos } from '../context/actionTypes';

function Contact() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  // const [contactoEnEdicion, setContactoEnEdicion] = useState(null);
   const {dispatch} = useList();

  // const fetchContacts = () => {
  //   fetch("https://playground.4geeks.com/contact/agendas/agenda_tomas")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("Datos recibidos del backend:", data); 
  //       setContacts(data.contacts); 
  //     })
  //     .catch(error => console.error("Error al cargar contactos:", error));
  // }

  useEffect(() => {
    // fetchContacts();
    dispatch({type: ObtenerContactos})
  }, []);

  // const handleDelete = (id) => {
  //   setContacts(prev => prev.filter(contact => contact.id !== id));
  // };

  // const handleEdit = (contacto) => {
  //   setContactoEnEdicion(contacto);
  // };

  
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-4">
        <button className="btn btn-success" onClick={() => navigate("/AddContact")}>
          Add new Contact
        </button>
      </div>

      <div className="contact-list shadow">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            id={contact.id}
            img={`https://picsum.photos/seed/${contact.id}/200`}
            name={contact.name}
            ubicacion={contact.address}
            tlf={contact.phone}
            email={contact.email}
            // handleDelete={handleDelete}
            // handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
