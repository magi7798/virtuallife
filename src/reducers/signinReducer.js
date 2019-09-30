const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGNIN_STATUS':
      return action.payload;
    default:
      return state;
  };
};