import React from 'react';
import './TypeRow.css';


const TypeRow = (props) => {

  if (props.types && props.types['data'] == null) {
    return (<div></div>);
  }
  
  let t = props.types.map(obj => {
    return (<li>
      {obj["type"]["name"]}
    </li>);
  });

  return (
    <div className="TypeRow">
      <h3>Types</h3>
      {t}
    </div>
  );
}

export default TypeRow;
