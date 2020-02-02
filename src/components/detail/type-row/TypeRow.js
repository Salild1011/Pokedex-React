import React from 'react';
import './TypeRow.css';


const TypeRow = (props) => {
  
  let types = props.stats.types.map(obj => {
    let typeClass = "type-" + obj["type"]["name"];
    return (<span className={"type-row-item " + typeClass}>
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
