import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import { PageStatus } from './sidebarReducers';

export default combineReducers({  
  form: formReducer,
  page: PageStatus
});