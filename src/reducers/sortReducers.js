const INITIAL_STATE = {
  value: 'rating',
  orders: 'desc'
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SORT_BY_VALUE':
      return {...state, value: action.payload};
    case 'SORT_IN_ORDERS':
      return {...state, orders: action.payload};
    default: 
      return state;
  };
};