import { createContext, useReducer, useContext } from 'react';
import { listReducer, initialState } from './listReducer';

// Creamos el contexto
const ListContext = createContext();

// Provider que distribuye estado y dispatch
export function ListProvider({ children }) {
    const [state, dispatch] = useReducer(listReducer, initialState);

    return (
        <ListContext.Provider value={{ state, dispatch }}>
            {children}
        </ListContext.Provider>
    );
}

// Hook personalizado para usar el contexto
export function useList() {
    const context = useContext(ListContext);
    if (!context) throw new Error('useList must be used within ListProvider');
    return context;
}