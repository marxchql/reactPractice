import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const params = useParams()
  // console.log(params)
  const id = params.id
  return (
    <div>detail{id}</div>
  );
}

export default Detail;