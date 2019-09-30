const INITIAL_STATE = false; 

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIDEBAR_PUSHER':
      return action.payload;
    default:
      return state;
  }
};