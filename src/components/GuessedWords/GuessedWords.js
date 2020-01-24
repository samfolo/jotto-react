import React from 'react';
import PropTypes from 'prop-types';

class GuessedWords extends React.Component {
  render() {
    let instructions = <div data-test='guessed-words-list'>
      {
        this.props.guessedWords.map((guessedWord, i) => {
          return (
            <div
              key={`${i}guessed${guessedWord}`}
              data-test='guessed-word'
            ></div>
          );
        })
      }
    </div>;

    if(this.props.guessedWords.length === 0) instructions = (
      <div data-test='instructions'>
        Try to guess the word
      </div>
    );

    return (
      <div data-test='component-guessed-words'>
        {instructions}
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
