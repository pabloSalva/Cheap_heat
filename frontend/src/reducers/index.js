import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import materiales from './materiales';

export default combineReducers({
  form: formReducer,
  materiales
});