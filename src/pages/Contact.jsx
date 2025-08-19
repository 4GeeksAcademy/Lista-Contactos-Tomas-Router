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

  const AGENDA_NAME = 'agenda_tomas';
  const API_BASE = 'https://playground.4geeks.com/contact';

  useEffect(() => {
    async function comprobarYCrearAgenda() {
      try {

        const resGet = await fetch(`${API_BASE}/agendas`);
        if (!resGet.ok) {
          throw new Error(`Error al obtener agendas: ${resGet.status}`);
        }
        const agendas = await resGet.json();

        const existe = agendas.some(a => a.name === AGENDA_NAME || a === AGENDA_NAME);

        if (existe) {
          console.log(`La agenda "${AGENDA_NAME}" ya existe.`);
        } else {
          console.log(`La agenda "${AGENDA_NAME}" no existe. Creándola...`);
          const resPost = await fetch(`${API_BASE}/agendas`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: AGENDA_NAME }),
          });

          if (!resPost.ok) {
            throw new Error(`Error al crear agenda: ${resPost.status}`);
          }

          const nuevaAgenda = await resPost.json();
          console.log('Agenda creada:', nuevaAgenda);
        }
      } catch (error) {
        console.error('Error comprobando o creando la agenda:', error);
      }
    }

    comprobarYCrearAgenda();
  }, []);

  useEffect(() => {
    fetchContactos(dispatch);
  }, []);


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
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
