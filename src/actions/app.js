const updateWindowWidth = width => async dispatch =>
  dispatch({
    type: 'UPDATE_WINDOW_WIDTH',
    data: width,
  });

export default {
  updateWindowWidth,
};
