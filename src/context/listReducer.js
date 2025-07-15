import { ObtenerContactos, CrearContacto, EditarContacto, BorrarContacto } from './actionTypes';
import { fetchContactos, actualizarContacto, guardarNuevoContacto, eliminarContacto } from '../operacionesCRUD/CRUD';

export const initialState = { contactos: [] };

export function listReducer(state, action) {
    switch (action.type) {
        case ObtenerContactos:
            return fetchContactos;

        case CrearContacto:
            return guardarNuevoContacto;

        case EditarContacto:
            return actualizarContacto;
            
        case BorrarContacto:
            return eliminarContacto;

        default:
            return state;
    }
}