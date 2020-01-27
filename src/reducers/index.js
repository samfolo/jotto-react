import { combineReducers } from 'redux';
import success from './successReducer';
import guessWords from './guessWordReducer';

export default combineReducers({
  success,
  guessWords,
});
 