// ContactCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ContactCard({ id, img, name, ubicacion, tlf, email }) {

  const borrarContacto = async (e) => {
    e.preventDefault();
    // COnfirmacion
    const confirmed = window.confirm(`¿Estás seguro de eliminar a ${name}?`);
    if (!confirmed) return;

    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/agenda_tomas/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        alert('Contacto eliminado');
      } else {
        const data = await response.json();
        alert(`Error al eliminar: ${data.msg || 'Error desconocido'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error en la red al intentar borrar');
    }
  };
  return (
    <div className="border card d-flex flex-row p-3">
      <img src={img} alt={name} className="rounded-circle me-3" width="150" height="150" />

      {/* Contenedor principal para texto + botones */}
      <div className="d-flex flex-grow-1 align-items-start">

        {/* Texto */}
        <div>
          <h5>{name}</h5>
          {ubicacion && <p>📍 {ubicacion}</p>}
          {tlf && <p>📞 {tlf}</p>}
          {email && <p>✉️ {email}</p>}
        </div>

        {/* Botones alineados a la derecha */}
        <div className="ms-auto d-flex gap-2">
          <Link to="/EditContact" state={{ id, img, name, ubicacion, tlf, email }}>
            <button className="btn btn-sm">✏️</button>
          </Link>
          <button className="btn btn-sm" onClick={borrarContacto}>🗑️</button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;

