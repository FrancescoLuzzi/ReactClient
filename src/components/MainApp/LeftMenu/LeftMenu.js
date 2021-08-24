import React, { useContext } from 'react';
import {DisplayContext} from '../../commons/DisplayState';
import AxiosIstance from '../../commons/AxiosIstance';

function LeftMenu(props){
    const [state, setState]= useContext(DisplayContext);

    const getTipologie=()=>{
        AxiosIstance.get("getTipologie")
        .then((result)=>{
          setState({tipi: result.data});
        })
    };

    return(
        <div className="leftMenu">
            <button onClick={()=>getTipologie()}>Get Tipologie</button>
            <ul>
              {state.tipi.map((el)=>{
                return <li id={el.tipo}>{el.tipo}</li>
              })}
            </ul>
        </div>
    );
}

export default LeftMenu;