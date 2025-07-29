// ContactCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import {eliminarContacto} from '../operacionesCRUD/CRUD';
import { useList } from '../context/ListContext';

function ContactCard({ id, img, name, ubicacion, tlf, email }) {

  const { dispatch } = useList();

    const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de que quieres borrar este contacto?')) {
      await eliminarContacto(id, dispatch);
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
          <button className="btn btn-sm" onClick={handleDelete}>🗑️</button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;

