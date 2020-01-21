import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';


const App = () => {
  const [ selected, setSelected ] = useState(null);
  const [ pokelist, setPokelist ] = useState([]);

  const fetchAllPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => {
        let data = response.data['results'];
        setPokelist(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Make network calls
  useEffect(() => {
    fetchAllPokemon();
  }, [ pokelist.length ]);

  let list = pokelist.map(value => {
    return <li>{value.name}</li>;
  });

  return (
    <div className="App">
      <div className="dex-container">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;
