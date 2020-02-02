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

  // Make network call
  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await axios('https://pokeapi.co/api/v2/pokemon/' + props.id);

      setDetails({ data: response.data });
    }

    fetchPokemonDetails();
  }, []);

  // Load the details
  let container = (<div />);
  if (details['data'] != null) {
    container = (<TypeRow stats={details['data']} />);
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
