import styled from 'styled-components';
import border from 'assets/styled/border';

const Item = border(
  styled.div `
    width: 100%;
    height: 100px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    /* border: 1px solid #000; */
    /* border-radius: 10px; */
    /* color: ${props => props.color} */
  `
)

// const Container = border(
//   styled.div `
//     .item {
//       width: 100%;
//       height: 100px;
//       background: #fff;
//       text-align: center;
//       line-height: 50px;
//       font-size: 16px;
//       border: 1px solid #000;
//       border-radius: 10px;
//       color: ${props => props.color};
//     }
//   `
// )

export {
  Item
}