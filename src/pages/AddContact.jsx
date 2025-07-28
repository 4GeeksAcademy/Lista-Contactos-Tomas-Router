import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useList } from '../context/ListContext';
import { guardarNuevoContacto } from '../operacionesCRUD/CRUD';

function AddContact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const { dispatch } = useList();

  const no_vacio = () => {
    const { name, email, phone, address } = formData;
    return name.trim() !== '' && email.trim() !== '' && phone.trim() !== '' && address.trim() !== '';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (no_vacio()) {
      await guardarNuevoContacto(formData, dispatch);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: ""
      })
    }
  }

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className='container-fluid text-center mt-5'>
      <h1>Add a new Contact</h1>
      <div className='bg-white w-50 mx-auto rounded shadow'>
        <form className='mt-5 d-flex flex-column p-3' onSubmit={(e) => handleSubmit(e)}>

          <label className='form-label d-flex justify-content-start mb-2'>Full Name</label>
          <input name='name'  value={formData.name} className='form-control mb-4' type="text"  placeholder='Introduce Full Name' onChange={handleChange} />

          <label className='form-label d-flex justify-content-start mb-2'>Email</label>
          <input name='email'  value={formData.email} className='form-control mb-4' type="mail"  placeholder='Introduce Email' onChange={handleChange} />

          <label className='form-label d-flex justify-content-start mb-2'>Phone</label>
          <input name='phone'  value={formData.phone} className='form-control mb-4' type="text"  placeholder='Introduce Phone' onChange={handleChange} />

          <label className='form-label d-flex justify-content-start mb-2'>Address</label>
          <input name='address'  value={formData.address} className='form-control mb-4' type="text"  placeholder='Introduce Address' onChange={handleChange} />

          <button type='submit' className='btn btn-primary'>Save</button>
          <Link className='d-flex justify-content-start mt-2' to={'/'}>Get Back to Contacts</Link>
        </form>
      </div>
    </div>
  );
}

export default AddContact;