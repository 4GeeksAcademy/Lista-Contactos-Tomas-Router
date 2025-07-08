import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AddContact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tlf, setTlf] = useState('');
  const [address, setAddress] = useState('');

  const guardarContacto = async (e) => {
    e.preventDefault();

    const nuevoContacto = {
      "name": name,
      "phone": tlf,
      "email": email,
      "address": address
    };

    try {
      const response = await fetch('https://playground.4geeks.com/contact/agendas/rabel/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoContacto)
      });

      if (response.ok) {
        alert('Contacto guardado con éxito');
        setName('');
        setEmail('');
        setTlf('');
        setAddress('');
      } else {
        const data = await response.json();
        console.error('Error del servidor:', data);
        alert(`Error al guardar: ${data.msg || 'Datos incorrectos'}`);
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('Error en la solicitud');
    }
  };

  return (
    <div className='container-fluid text-center mt-5'>
      <h1>Add a new Contact</h1>
      <div className='bg-white w-50 mx-auto rounded shadow'>
        <form className='mt-5 d-flex flex-column p-3' onSubmit={guardarContacto}>

          <label className='form-label d-flex justify-content-start mb-2'>Full Name</label>
          <input className='form-control mb-4' type="text" value={name} placeholder='Introduce Full Name' onChange={(e) => setName(e.target.value)} />

          <label className='form-label d-flex justify-content-start mb-2'>Email</label>
          <input className='form-control mb-4' type="mail" value={email} placeholder='Introduce Email' onChange={(e) => setEmail(e.target.value)} />

          <label className='form-label d-flex justify-content-start mb-2'>Phone</label>
          <input className='form-control mb-4' type="text" value={tlf} placeholder='Introduce Phone' onChange={(e) => setTlf(e.target.value)} />

          <label className='form-label d-flex justify-content-start mb-2'>Address</label>
          <input className='form-control mb-4' type="text" value={address} placeholder='Introduce Address' onChange={(e) => setAddress(e.target.value)} />

          <button type='submit' className='btn btn-primary'>Save</button>
          <Link className='d-flex justify-content-start mt-2' to={'/'}>Get Back to Contacts</Link>
        </form>
      </div>
    </div>
  );
}

export default AddContact;