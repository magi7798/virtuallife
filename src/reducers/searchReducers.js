const INITIAL_STATE = { value: '', results: [{item_id:'', type:''}]};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_ITEM_LIST':
      return {...state, results: action.payload};
    default:
      return state;
  };
};