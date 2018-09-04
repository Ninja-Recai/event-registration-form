export const createReducer = (initialState, actionsMap) => (state = initialState, action = {}) => {
  const reducerFn = actionsMap[action.type];
  if (reducerFn) {
    return reducerFn(state, action);
  }
  return state;
};
