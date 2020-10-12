import { combineReducers } from 'redux';
import message from './message.reducer';

const rootReducer = combineReducers({
  message,
});

export default rootReducer;
