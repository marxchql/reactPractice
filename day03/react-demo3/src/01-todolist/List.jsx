import React from 'react';

const List = (props) => {
  return (
    <ul>
      { props.list.map(item => (
        <li key={ item.id }>
          { item.title }
          <button onClick={ props.onDeleteItem(item.id) }>del</button>
        </li>
      )) }
    </ul>
  );
}

export default List;