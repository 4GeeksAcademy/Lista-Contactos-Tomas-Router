import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useList } from '../context/ListContext';
import { actualizarContacto, fetchContactos } from '../operacionesCRUD/CRUD'; 
import { EditarContacto } from '../context/actionTypes';

function EditContact() {
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useList();

  const { id, name, email, tlf, ubicacion } = location.state || {};

  const [contacto, setContacto] = useState({
    id,
    full_name: name || '',
    email: email || '',
    phone: tlf || '',
    address: ubicacion || '',
    agenda_slug: 'rabel'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContacto((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await actualizarContacto(id, contacto);
      await fetchContactos(dispatch);  
      dispatch({ type: EditarContacto, id, contacto });
      navigate('/');
    } catch (error) {
      console.error('Error al editar contacto:', error);
    }
  };

  return (
    <div className="container mt-4 bg-white rounded shadow p-5 mt-5">
      <h2 className='text-center mb-5'>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre completo</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={contacto.full_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Correo</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={contacto.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Teléfono</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={contacto.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Dirección</label>
          <input
            type="text"
            name="address"
            className="form-control"
            value={contacto.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Guardar</button>
        <Link className="d-flex justify-content-start mt-2" to="/">Volver a la lista</Link>
      </form>
    </div>
  );
}

export default EditContact;