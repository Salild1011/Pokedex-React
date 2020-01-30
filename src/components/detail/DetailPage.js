import React, { useState, useEffect } from 'react';
import './DetailPage.css';

import axios from 'axios';
import TypeRow from './type-row/TypeRow';


const DetailPage = (props) => {
  // Constants
  const IMG_BASE_URL = 'https://pokeres.bastionbot.org/images/pokemon/';
  const IMG_EXT = '.png';

  // State
  const [ details, setDetails ] = useState({ data: null });

  const fetchPokemonDetails = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + props.id)
    .then(response => {
      let data = response.data;
      setDetails({ data: data });
    })
    .catch(error => {
      console.log(error);
    });
  }

  // Make network call
  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  // Load the details
  let container = (<div />);
  if (details['data'] != null) {
    container = (<TypeRow types={details['data']} />);
  }

  return (
    <div className="DetailPage">
      <div className="poke-img-container">
        <img className="poke-img" src={IMG_BASE_URL + props.id + IMG_EXT} alt="pokemon" />
      </div>

      <div className="stats-container">
        { container }
      </div>
    </div>
  );
}

export default DetailPage;
