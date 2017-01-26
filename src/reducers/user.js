import _ from 'lodash';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE': {
      const favorites = _.get(state, 'favorites', []);
      const article = _.get(action.data, 'article', 0);
      const prisme = _.get(action.data, 'prisme', 0);
      const infos = _.get(action.data, 'infos', 0);

      return {
        ...state,
        favorites: {
          ...favorites,
          [prisme]: {
            ...favorites[prisme],
            [article]: infos,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
