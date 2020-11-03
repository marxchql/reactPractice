import React, { useEffect } from 'react';

import CooksUi from '../ui/CooksUi';

import { useDispatch, useSelector } from 'react-redux';
import {
  getCooksallAsync
} from '../actionCreator';

// const mapStateToProps = state => {
//   return {
//     ...state.cooksReducer
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAll() {
//       dispatch(getCooksallAsync())
//     }
//   }
// }


// @connect(mapStateToProps, mapDispatchToProps)
// class Cooks extends Component {

//   render() {
//     return (
//       <CooksUi {...this.props}></CooksUi>
//     );
//   }

//   componentDidMount() {
//     this.props.getAll();
//   }
// }

const Cooks = (props) => {
  const dispatch = useDispatch()
  const store = useSelector(state => state)

  useEffect(() => {
    dispatch(getCooksallAsync())
  }, [dispatch])

  return (
    <CooksUi {...store.getIn(["cooksReducer"]).toJS()}></CooksUi>
  );
}

export default Cooks;
