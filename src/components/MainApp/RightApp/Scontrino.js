import React, { useState, useEffect} from 'react';

function Scontrino(props){
    const [state, setState]= useState(props.scontrino);

    return(
        <div className="scontrino" id={state.id} onClick={props.handleDelete}>
            {state.tipo}____{state.prezzo}
        </div>
    );
}

export default Scontrino;