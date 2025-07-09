import { ObtenerContactos, CrearContacto, EditarContacto, BorrarContacto } from './actionTypes';
import { fetchContacts, editarContacto, guardarContacto, borrarContacto } from '../operacionesCRUD/CRUD';

export const initialState = { contactos: []};

export function listReducer(state, action) {
    switch (action.type) {
        case ObtenerContactos:
            return fetchContacts;
        case CrearContacto:
            return editarContacto;
        case EditarContacto:
            return guardarContacto;
        case BorrarContacto:
            return borrarContacto;
        default:
            return state;
    }
}