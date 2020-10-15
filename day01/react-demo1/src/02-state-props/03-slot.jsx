import React from 'react';

class Child extends React.Component {
  render() {
    console.log(this.props)
    return (
      <>
        <div>react!</div>
        { this.props.children }
      </>
    )
  }
}

export default Child;
