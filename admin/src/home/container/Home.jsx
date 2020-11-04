import React from 'react';
import HomeUi from '../ui/HomeUi.jsx';

const Home = (props) => {
  return (
    <HomeUi children={props.children}></HomeUi>
  );
}

export default Home;