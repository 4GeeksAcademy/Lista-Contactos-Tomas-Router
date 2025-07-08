import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditContact() {
  const location = useLocation();
  const navigate = useNavigate();

  const { id, img, name, ubicacion, tlf, email } = location.state || {};

  const [contacto, setContacto] = useState({
    full_name: name || '',
    email: email || '',
    phone: tlf || '',
    address: ubicacion || '',
    agenda_slug: 'rabel'
  });

  const handleChange = (e) => {
    setContacto({ ...contacto, [e.target.name]: e.target.value });
  };

  const guardarContacto = async () => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/rabel/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contacto)
      });

      if (response.ok) {
        alert('Contacto actualizado');
        navigate('/');
      } else {
        const data = await response.json();
        alert(`Error: ${data.msg || 'No se pudo actualizar'}`);
      }
    } catch (error) {
      console.error(error);
      alert('Error de red');
    }
  };

  return (
    <div className="container mt-4 bg-white rounded shadow p-5 mt-5">
      <h2>Editar Contacto</h2>
      <form onSubmit={(e) => { e.preventDefault(); guardarContacto(); }}>
        <div className="mb-3">
          <label>Nombre completo</label>
          <input type="text" name="full_name" className="form-control" value={contacto.full_name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Correo</label>
          <input type="email" name="email" className="form-control" value={contacto.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Teléfono</label>
          <input type="text" name="phone" className="form-control" value={contacto.phone} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Dirección</label>
          <input type="text" name="address" className="form-control" value={contacto.address} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary w-100">Save</button>
        <Link className='d-flex justify-content-start mt-2' to={'/'}>Get Back to Contacts</Link>
      </form>
    </div>
  );
}

export default EditContact;