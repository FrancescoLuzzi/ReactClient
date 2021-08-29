import React, { useContext , useState } from 'react';
import {ScontriniContext} from '../../Contexts/ScontriniContext';
import Scontrino from './Scontrino';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import {AxiosIstance} from '../../commons/AxiosIstance';


function ScontrDisplayer(props){
    const [scontrini, setScontrini]= useContext(ScontriniContext);

    const handleDelete=(id)=>{
      const newArr=scontrini.filter(element=>{return element.id !== +id});
      setScontrini([...newArr]);
      AxiosIstance.get(`deleteScontrino?id=${id}`);
    }

    return(
        <div className="scontrDisplayer" >
          <TransitionGroup
           className="scontr-list"
          >
                {scontrini.map((el)=>{
                  return <CSSTransition
                    key={el.id}
                    timeout={300}
                    classNames="scontrino"
                  >
                    <Scontrino scontrino={el} handleDelete={handleDelete} key={el.id}></Scontrino>
                  </CSSTransition>
                })}
          </TransitionGroup>      
        </div>
        
    );
}

export default ScontrDisplayer;