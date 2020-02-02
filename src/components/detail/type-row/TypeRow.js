import React from 'react';
import './TypeRow.css';


const TypeRow = (props) => {
  
  let types = props.stats.types.map(obj => {
    return (<span className="type-row-item">
      { obj["type"]["name"].toUpperCase() }
    </span>);
  });

  return (
    <div className="TypeRow">
      <span className="type-title">Types</span>
      <div className="type-row-container">
        {types}
      </div>
    </div>
  );
}

export default TypeRow;
