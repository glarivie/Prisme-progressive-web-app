const addToFavorite = (article, prisme, infos) =>
  async dispatch =>
    dispatch({
      type: 'ADD_TO_FAVORITE',
      data: {
        article,
        prisme,
        infos,
      },
    });

export default {
  addToFavorite,
};
