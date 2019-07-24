import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import visible from './sidebarReducers';

export default combineReducers({  
  form: formReducer,
  visible
});