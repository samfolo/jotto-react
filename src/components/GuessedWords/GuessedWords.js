import React from 'react';
import PropTypes from 'prop-types';

class GuessedWords extends React.Component {
  render() {
    return (
      <div data-test='component-guessed-words'>
        <div data-test='instructions'>
          Try to guess the word
        </div>
      </div>
    );
  }
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
       guessedWord: PropTypes.string.isRequired,
       letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
