
import {
  ObtenerContactos,
  CrearContacto,
  EditarContacto,
  BorrarContacto
} from '../context/actionTypes';

const API_URL = "https://playground.4geeks.com/contact/agendas/agenda_tomas";

export const fetchContactos = async (dispatch) => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    dispatch({ type: ObtenerContactos, payload: data.contacts || [] });
  } catch (err) {
    console.error("Error al cargar contactos:", err);
    dispatch({ type: ObtenerContactos, payload: [] });
  }
};

export const guardarNuevoContacto = async (contacto, dispatch) => {
  try {
    const res = await fetch(`${API_URL}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contacto)
    });
    if (res.ok) {
      fetchContactos(dispatch);
    } else {
      alert("Error al crear contacto");
    }
  } catch (err) {
    console.error(err);
  }
};

export const actualizarContacto = async (id, contacto) => {
  try {
    const res = await fetch(`${API_URL}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contacto)
    });
    const data = await res.json();
    if (res.ok) {
      dispatch({ type: EditarContacto, payload: data });
    } else {
      alert("Error al actualizar contacto");
    }
  } catch (err) {
    console.error(err);
  }
};

export const eliminarContacto = async (id) => {
  try {
    const res = await fetch(`${API_URL}/contacts/${id}`, {
      method: "DELETE"
    });
    if (res.ok) {
      dispatch({ type: BorrarContacto, payload: id });
    } else {
      alert("Error al borrar contacto");
    }
  } catch (err) {
    console.error(err);
  }
};