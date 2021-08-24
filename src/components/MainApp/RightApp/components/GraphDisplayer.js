import React, { useContext } from 'react';
import {DisplayContext} from '../../../commons/DisplayState';

function GraphDisplayer(props){
    const [state, setState]= useContext(DisplayContext);
    return(
        <div className="graphDisplayer">
            
        </div>
    );
}

export default GraphDisplayer;