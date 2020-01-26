import { actionTypes } from '../actions';
import successReducer from './successReducer';

describe('successReducer', () => {
  it('returns default initial state of `false` when no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });
  
  it('returns `true` upon receiving an action with type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
  });
});
