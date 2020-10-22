// function createThunkMiddleware(extraArgument) {
  export default ({ dispatch, getState }) => next => action => {
    console.log(123)
    return next(action);
  };
// }

// const thunk = createThunkMiddleware();
// thunk.withExtraArgument = createThunkMiddleware;

// export default thunk;