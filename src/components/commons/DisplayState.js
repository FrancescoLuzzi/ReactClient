import React, {useState} from 'react';

const initialState={
    tipi: [],
    scontrini: [],
    tipoSelezionato: ""
};

export const DisplayContext = React.createContext();

const DisplayState= ({children}) => {
    const [state, setState]= useState(initialState);

    return(
        <DisplayContext.Provider value={[state,setState]}>{children}</DisplayContext.Provider>
    );
};

export default DisplayState;