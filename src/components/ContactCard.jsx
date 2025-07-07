// ContactCard.js
import React from 'react';

function ContactCard({img, name, ubicacion,tlf, email}) {
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
          <button className="btn btn-sm">✏️</button>
          <button className="btn btn-sm">🗑️</button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;

 