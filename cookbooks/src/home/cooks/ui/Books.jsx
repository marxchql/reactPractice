import React from 'react';
import {Grid} from 'antd-mobile';

import {BooksWrap} from './StyledComponent';

// class Books extends Component {
//   render() {
//     return (
//       <BooksWrap>
//         <div className="bgccc"></div>
//         <div className="books">
//           <h3>菜谱</h3>
//           <Grid data={this.props.booksList}
//             columnNum={2}
//             square={false}
//             hasLine={false}
//             renderItem={dataItem => (
//               <div style={{width: '160px',height: '120px',background: `url(${this.props.booksPrefix + dataItem.url})`, backgroundSize: '100% 100%', position: 'relative'}}>
//                 <div className="shadow" style={{color: dataItem.bgColor}}>
//                   <p>{dataItem.title}</p>
//                   <p>{dataItem.content}</p>
//                 </div>
//               </div>
//             )}
//           />
//         </div>
//       </BooksWrap>
      
//     );
//   }
// }

const Books = (props) => {
  return (
    <BooksWrap>
      <div className="bgccc"></div>
      <div className="books">
        <h3>菜谱</h3>
        <Grid data={props.booksList}
          columnNum={2}
          square={false}
          hasLine={false}
          renderItem={dataItem => (
            <div style={{width: '160px',height: '120px',background: `url(${props.booksPrefix + dataItem.url})`, backgroundSize: '100% 100%', position: 'relative'}}>
              <div className="shadow" style={{color: dataItem.bgColor}}>
                <p>{dataItem.title}</p>
                <p>{dataItem.content}</p>
              </div>
            </div>
          )}
        />
      </div>
    </BooksWrap>
  )
}

export default Books;