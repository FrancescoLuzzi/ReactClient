import React, { useState, useEffect} from 'react';

function Scontrino(props){
    const [state, setState]= useState(props.scontrino);

    return(
        <div className="scontrino">
            {state.tipo}____{state.prezzo}
        </div>
    );
}

export default Scontrino;