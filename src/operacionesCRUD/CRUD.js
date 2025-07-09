// Obtener Contactos
export const fetchContacts = () => {
    fetch("https://playground.4geeks.com/contact/agendas/agenda_tomas")
        .then(response => response.json())
        .then(data => {
            console.log("Datos recibidos del backend:", data);
            setContacts(data.contacts);
        })
        .catch(error => console.error("Error al cargar contactos:", error));
}


// Editar Contacto
export const editarContacto = async () => {
    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/agenda_tomas/contacts/${id}`, {
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

// Guardar Nuevo contacto
export const guardarContacto = async (e) => {
    e.preventDefault();

    const nuevoContacto = {
        "name": name,
        "phone": tlf,
        "email": email,
        "address": address
    };

    try {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/agenda_tomas/contacts', {
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

// Borrar contacto
export const borrarContacto = async (e) => {
    e.preventDefault();
    // COnfirmacion
    const confirmed = window.confirm(`¿Estás seguro de eliminar a ${name}?`);
    if (!confirmed) return;

    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/rabel/contacts/${id}`, {
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
