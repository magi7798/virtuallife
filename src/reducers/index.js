import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import visible from './sidebarReducers';
import searchResults from './searchReducers';
import isSigned from './signinReducer';

export default combineReducers({  
  form: formReducer,
  visible,
  searchResults,
  isSigned
});