const sort = (state = 'ASC', action) => {
  switch (action.type) {
    case 'SORT_TODO':
      return action.sortcase
    default:
      return state
  }
};

export default sort