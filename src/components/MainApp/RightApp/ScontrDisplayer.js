import React, { useContext } from 'react';
import {ScontriniContext} from '../../Contexts/ScontriniContext';
import Scontrino from './Scontrino';
import AxiosIstance from '../../commons/AxiosIstance';


function ScontrDisplayer(props){
    const [scontrini, setScontrini]= useContext(ScontriniContext);

    const handleDelete=(event)=>{
      /*AxiosIstance.get(`deleteScontrino?id=${event.target.id}`)
        .then((result)=>{
          setScontrini(prevState=> prevState.)
      })*/
      alert("dovrei morire");
    }

    const myStyle={
      
    };
    return(
        <div className="scontrDisplayer" style={myStyle}>
                {scontrini.map((el)=>{
                  return <Scontrino scontrino={el} handleDelete={handleDelete}></Scontrino>
                })}
                
        </div>
        
    );
}

export default ScontrDisplayer;