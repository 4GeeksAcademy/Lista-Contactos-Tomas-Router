import React from 'react';
import ContactCard from '../components/ContactCard';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const getRandomImage = () => {
    const randomId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/seed/${randomId}/200`;
  };

  const contacts = [
    { id: 1, img: getRandomImage(), ubicacion: 'Jerez', tlf: '666889877', name: 'Juan Pérez', email: 'juan@example.com' },
    { id: 2, img: getRandomImage(), ubicacion: 'Sanxenxo', tlf: '657849385', name: 'Ana López', email: 'ana@example.com' },
    { id: 3, img: getRandomImage(), ubicacion: 'Oporto', tlf: '768594875', name: 'Carlos Ruiz', email: 'carlos@example.com' }
  ];

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-4">
         <button className="btn btn-success" onClick={() => navigate("/AddContact")}>
          Add new Contact
        </button>
      </div>

      <div className="contact-list">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            img={contact.img}
            name={contact.name}
            ubicacion={contact.ubicacion}
            tlf={contact.tlf}
            email={contact.email}
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
