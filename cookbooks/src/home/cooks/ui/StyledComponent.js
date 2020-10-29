import styled from 'styled-components';

const Container = styled.div `
  background: #fff;
  header {
    width: 100%;
    height: 50px;
    background: rgb(212,84,84);
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: #fff;
  }
`

const SwiperWrap = styled.div `
  width: 335px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 20px;
  overflow: hidden;
  .slider-list {
    height: 180px !important;
  }
  img {
    border-radius: 20px;
  }
`

const MenuWrap = styled.div `
  img {
    width: 36px;
    margin: 10px 0;
  }
  .title {
    font-size: 14px;
  }
`


const BooksWrap = styled.div `
  .bgccc {
    width: 100%;
    height: 15px;
    background: #efefef;
  }
  .books {
    width: 100%;
    padding: 0 15px;
  }
  .am-grid-item:last-child {
    .am-grid-item-content {
      float: right;
    }
  }
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(255,255,255,0));
  }
`

const RecommendWrap = styled.div `
  nav {
    padding-left: 15px;
    display: flex;
    li {
      width: 70px;
      height: 30px;
      list-style: none;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export {
  Container,
  SwiperWrap,
  MenuWrap,
  BooksWrap,
  RecommendWrap
}