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

export {
  Container,
  SwiperWrap,
  MenuWrap
}