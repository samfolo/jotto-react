import { findByTestAttr, setup, checkProps } from "../../testHelpers";
import GuessedWords from './GuessedWords';

describe('<GuessedWords />', () => {
  let wrapper;
  let guessedWordsComponent;
  
  beforeEach(() => {
    wrapper = setup(GuessedWords);
    guessedWordsComponent = findByTestAttr(wrapper, 'component-guessed-words');
  });

  it('renders without crashing', () => {
    expect(guessedWordsComponent).toHaveLength(1);
  });

  it('does not throw warning with expected props', () => {
    const expectedProps = {}
    checkProps(GuessedWords, expectedProps);
  });
});
