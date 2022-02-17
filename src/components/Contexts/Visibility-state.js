import React, {useState} from 'react';

const initialState=true;

export const VisibilityContext = React.createContext();

const VisibilityState= ({children}) => {
    const [visibility, setVisibility]= useState(initialState);


    return(
        <VisibilityContext.Provider value={[visibility, setVisibility]}>{children}</VisibilityContext.Provider>
    );
};

export default VisibilityState;