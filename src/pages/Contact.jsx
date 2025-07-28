import React from 'react';
import ContactCard from '../components/ContactCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useList } from '../context/ListContext';
import { ObtenerContactos } from '../context/actionTypes';
import { fetchContactos } from '../operacionesCRUD/CRUD';

function Contact() {
  const navigate = useNavigate();
  const { dispatch, state } = useList();
  const contacts = state.contacts;

  useEffect(() => {
    //fetchContactos();
    fetchContactos(dispatch);
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
