import React from 'react';
import './DetailPage.css';


const DetailPage = (props) => {

  return (
    <div className="DetailPage">
      <div className="poke-img-container">
        <img className="poke-img" src={"https://pokeres.bastionbot.org/images/pokemon/" + props.id + ".png"} />
      </div>
    </div>
  );
}

export default DetailPage;
