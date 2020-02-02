import React from 'react';
import './TypeRow.css';


const TypeRow = (props) => {
  
  let types = props.stats.types.map(obj => {
    return (<li>
      {obj["type"]["name"]}
    </li>);
  });

  return (
    <div className="TypeRow">
      <h3>Types</h3>
      <ul>
        {types}
      </ul>
    </div>
  );
}

export default TypeRow;
