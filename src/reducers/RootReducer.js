const rootReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_PROJECT':
      return action.project;
    case 'DESELECT_PROJECT':
      return null;
    default:
      return state;
  }
};

export default rootReducer;
