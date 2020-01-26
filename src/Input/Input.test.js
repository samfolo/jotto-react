import { connectedSetup, findByTestAttr, storeFactory } from '../testHelpers';
import Input from './Input';

describe('<Input />', () => {
  let initialState = { success: false };
  let defaultProps = {};
  let wrapper;
  let inputComponent;

  beforeEach(() => {
    wrapper = connectedSetup(Input, initialState);
    inputComponent = findByTestAttr(wrapper, 'component-input');
  });

  describe('when the word has not been guessed', () => {
    it('renders without crashing', () => {
      expect(inputComponent).toHaveLength(1);
    });

    it('renders the input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox).toHaveLength(1);
    });

    it('renders the submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton).toHaveLength(1);
    });
  });
  
  describe('when the word has been guessed', () => {
    beforeEach(() => {
      wrapper = connectedSetup(Input, { success: true });
    });

    it('renders without crashing', () => {
      expect(inputComponent).toHaveLength(1);
    });

    it('does not render the input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox).toHaveLength(0);
    });

    it('does not render the submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton).toHaveLength(0);
    });
  });
});
