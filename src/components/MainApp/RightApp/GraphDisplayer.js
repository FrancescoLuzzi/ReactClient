import React, { useContext } from 'react';
import {ScontriniContext} from '../../Contexts/ScontriniContext';

function GraphDisplayer(props){
    const [scontrini, setScontrini]= useContext(ScontriniContext);
    return(
        <div className="graphDisplayer">
            
        </div>
    );
}

export default GraphDisplayer;