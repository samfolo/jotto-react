import { findByTestAttr, setup, checkProps } from "../../testHelpers";
import GuessedWords from './GuessedWords';

describe('<GuessedWords />', () => {
  let wrapper;
  let guessedWordsComponent;
  const defaultProps = { 
    guessedWords: [
      { guessedWord: 'train', letterMatchCount: 3 },
    ]
  }
  
  beforeEach(() => {
    wrapper = setup(GuessedWords, defaultProps);
    guessedWordsComponent = findByTestAttr(wrapper, 'component-guessed-words');
  });

  it('renders without crashing', () => {
    expect(guessedWordsComponent).toHaveLength(1);
  });

  it('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
  });

  describe('when there are no words guessed', () => {
    beforeEach(() => {
      wrapper = setup(GuessedWords, { guessedWords: []  });
    });

    it('renders the text `Try to guess the word`', () => {
      const instructions = findByTestAttr(wrapper, 'instructions');
      expect(instructions.text().length).not.toBe(0);
    });
  }); 

  describe('when there are some words guessed', () => {
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'raindrop', letterMatchCount: 4 },
      { guessedWord: 'print', letterMatchCount: 4 },
    ];

    beforeEach(() => {
      wrapper = setup(GuessedWords, null, { guessedWords });
    });
    
    it('does not render the text `Try to guess the word`', () => {
      const instructions = findByTestAttr(wrapper, 'instructions');
      expect(instructions).toHaveLength(0);
    });

    it('renders a list of guessed words', () => {
      const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words-list');
      expect(guessedWordsNode).toHaveLength(1);
    });

    it('renders each guessed word', () => {
      const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word');
      expect(guessedWordsNode).toHaveLength(guessedWords.length);
    });
  }); 
});
