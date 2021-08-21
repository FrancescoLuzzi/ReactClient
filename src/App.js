import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react';

function App() {
  const [Tipologie,setTipologie]= useState([]);
  const Axios= axios.create({
    baseURL: 'http://192.168.1.142:8000/api/'
  });

  const getTipologie= ()=>{
    Axios.get("getTipologie")
    .then((result)=>{
      setTipologie(result.data);
    })
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getTipologie}>Get Tipologie</button>
        <ul>
        {Tipologie.map((el)=>{
          return <li>{el.tipo}</li>
        })}
        </ul>
      </header>
    </div>
  );
}

export default App;
