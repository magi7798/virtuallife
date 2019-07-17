import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import pageStatus from './sidebarReducers';
import searchReducers from './searchReducers';
import sortReducers from './sortReducers';

export default combineReducers({  
  form: formReducer,
  page: pageStatus,
  search: searchReducers,
  sort: sortReducers
});