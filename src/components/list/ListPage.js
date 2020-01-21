import React from 'react';
import './ListPage.css';


const ListPage = (props) => {

  return (
    <div className="ListPage">
      <div className="list-screen">
        <ul>{props.list}</ul>
      </div>
    </div>
  );
}

export default ListPage;
