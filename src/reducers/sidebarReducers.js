export default (state = '', action) => {
  switch (action.type) {
    case 'PAGE_STATUS':
      return action.payload;
    case 'SIGNIN_STATUS':
      return action.payload;
    default:
      return state;
  }
};