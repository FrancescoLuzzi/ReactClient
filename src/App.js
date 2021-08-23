import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react';
import Scontrino from './Scontrino';

function App() {
  const [Tipologie,setTipologie]= useState([]);
  const [Scontrini,setScontrini]=useState([]);
  const Axios= axios.create({
    //baseURL: 'http://192.168.1.142:8000/api/'
    baseURL: 'http://192.168.43.14:8000/api/'
  });

  const getTipologie= ()=>{
    Axios.get("getTipologie")
    .then((result)=>{
      setTipologie(result.data);
    })
  };

  const getScontrini= (year)=>{
    Axios.get(`getScontrini?year=${year}`)
    .then((result)=>{
      setScontrini(result.data);
    })
  };
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className="mainApp">
        <div className="leftMenu">
            <button onClick={()=>getTipologie()}>Get Tipologie</button>
            <ul>
              {Tipologie.map((el)=>{
                return <li id={el.tipo}>{el.tipo}</li>
              })}
            </ul>
        </div>
        <div className="rightApp">
            <div className="graphDisplaier">

            </div>
            <div className="scontrDisplaier">
              <button onClick={()=>getScontrini(2020)}>getScontrini</button>
                {Scontrini.map((el)=>{
                  return <Scontrino scontrino={el}></Scontrino>
                })}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
