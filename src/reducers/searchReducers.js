const INITIAL_STATE = {
  isLoading: false,
  value: '',
  results: []
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SEARCH_VALUE':
      return {...state, value: action.payload, isLoading: true};
    case 'SEARCH_RESULTS':
      return {...state, results: action.payload, isLoading: false};
    default: 
      return state;
  };
};