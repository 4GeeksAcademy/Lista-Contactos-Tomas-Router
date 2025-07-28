import { ObtenerContactos, CrearContacto, EditarContacto, BorrarContacto } from './actionTypes';
import { fetchContactos, actualizarContacto, guardarNuevoContacto, eliminarContacto } from '../operacionesCRUD/CRUD';

export const initialState = { contacts: [{id:"10", name:"Tomas", address: "Portonovo", phone: "76857484", email: "adwawd@gmail.com"}] };

export function listReducer(state, action) {
    switch (action.type) {
        case ObtenerContactos:
            return {contacts:action.payload};

        default:
            return state;
    }
}