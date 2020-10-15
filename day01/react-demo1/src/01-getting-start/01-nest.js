import React, { Component } from 'react';

class Header extends Component {
  render() {
    return <header>头部</header>
  }
}


class Content extends Component {
  render() {
    return <main>内容</main>
  }
}


export default class extends Component {
  render() {
    return (
      // <Fragment></Fragment> 或者 <></>  表示占位标签
      <>
        <Header />
        <Content />
      </>
    )
  }
}
