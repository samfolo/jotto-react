import React from 'react';
import PropTypes from 'prop-types';

class GuessedWords extends React.Component {
  render() {
    let instructions = null;
    let tableContents = this.props.guessedWords.map((wordHash, i) => {
      return (
        <tr key={`${i}guessed${wordHash}`} data-test='guessed-word'>
          <td>{wordHash.guessedWord}</td><td>{wordHash.letterMatchCount}</td>
        </tr>
      );
    });

    let table = (
      <table data-test='guessed-words-list' className='table taable-sm'>
        <thead className='thead-light'>
          <tr><th>Guessed Word</th><th>Letter Match Count</th></tr>
        </thead>
        <tbody>
          {tableContents}
        </tbody>
      </table>
    );

    if(this.props.guessedWords.length === 0) {
      instructions = <div data-test='instructions'>Try to guess the word</div>
      table = null;
    };

    return (
      <div data-test='component-guessed-words'>
        {instructions}
        {table}
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
