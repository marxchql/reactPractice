import React from 'react';

const Content = (props) => {
  return (
    <div className="home-content">
      {props.children}
    </div>
  );
}

export default Content;