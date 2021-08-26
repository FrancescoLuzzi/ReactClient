import React, {useState} from 'react';

const initialState=[];

export const ScontriniContext = React.createContext();

const ScontriniState= ({children}) => {
    const [scontrini, setScontrini]= useState(initialState);

    return(
        <ScontriniContext.Provider value={[scontrini,setScontrini]}>{children}</ScontriniContext.Provider>
    );
};

export default ScontriniState;