import React, { useContext } from 'react';
import {DisplayContext} from '../../../commons/DisplayState';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Scontrino from './Scontrino';
import AxiosIstance from '../../../commons/AxiosIstance';

function ScontrDisplayer(props){
    const [state, setState]= useContext(DisplayContext);

    const getScontrini= (year)=>{
        AxiosIstance.get(`getScontrini?year=${year}`)
        .then((result)=>{
          setState({scontrini: result.data});
        })
      };
    return(
        <div className="scontrDisplayer">
            <button onClick={()=>getScontrini(2020)}>getScontrini</button>
                {state.scontrini.map((el)=>{
                  return <Scontrino scontrino={el}></Scontrino>
                })}
                <div className="addButton" onClick={()=>console.log("hello")}>
                  <PostAddIcon fontSize="large"/>
                </div>
        </div>
    );
}

export default ScontrDisplayer;