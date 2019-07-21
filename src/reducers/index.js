import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import pageStatus from './sidebarReducers';

export default combineReducers({  
  form: formReducer,
  page: pageStatus
});