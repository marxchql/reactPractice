function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    console.log(456)

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;