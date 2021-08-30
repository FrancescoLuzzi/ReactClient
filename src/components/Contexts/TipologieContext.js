import React, {useState} from 'react';

const initialState=[];

export const TipologieContext = React.createContext();

const TipologieState= ({children}) => {
    const [tipologie, setTipologie]= useState(initialState);

    return(
        <TipologieContext.Provider value={[tipologie,setTipologie]}>{children}</TipologieContext.Provider>
    );
};

export default TipologieState;