import _ from 'lodash';

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_WINDOW_WIDTH':
      return {
        ...state,
        width: action.data,
      }
    default:
      return state;
  }
};

export default appReducer;
