import React from 'react';
import {useHistory} from 'react-router-dom';

const Hot = () => {
  let history = useHistory();
  function handleClick() {
    history.push('/detail/' + Math.random())
  }
  return (
    <div onClick={handleClick}>Hot</div>
  );
}



export default Hot;