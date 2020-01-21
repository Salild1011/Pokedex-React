import React from 'react';
import './ListPage.css';


const ListPage = (props) => {

  let list = props.list.map((value, index) => {
    const name = value.name.charAt(0).toUpperCase() + value.name.slice(1);
    return (
      <li>
        <div className="list-item">
          <div className="item-num">{index + 1}</div>
          <div className="item-name">{name}</div>
        </div>
      </li>
    );
  });

  return (
    <div className="ListPage">
      <div className="list-screen">
        <ul className="dex-list">{list}</ul>
      </div>
    </div>
  );
}

export default ListPage;
