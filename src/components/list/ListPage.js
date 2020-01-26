import React from 'react';
import './ListPage.css';


const ListPage = (props) => {
  const onItemClick = (event, index) => {
    props.select(index);
  }

  let list = props.list.map((value, index) => {
    const name = value.name.charAt(0).toUpperCase() + value.name.slice(1);
    let contentNum = (<div className="item-num">{index + 1}</div>);
    let contentName = (<div className="item-name">{name}</div>);

    return (
      <li key={index} onClick={(event) => onItemClick(event, index + 1)}>
        { props.selectedIndex === index + 1 ? 
          <div className="selected-list-item">
            { contentNum }
            { contentName }
          </div>
        : 
          <div className="list-item">
            { contentNum }
            { contentName }
          </div>
        }
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
