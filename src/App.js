import React from 'react';
import './App.css';

import GuessedWords from '../src/components/GuessedWords/GuessedWords';
import Congrats from '../src/components/Congrats/Congrats';

class App extends React.Component {
  render() {
    return (
      <div className='container' data-test='component-app'>
        <h1>Jotto</h1>
        <Congrats success={true} data-test='component-congrats' />
        <GuessedWords 
          guessedWords={[{ guessedWord: 'sam', letterMatchCount: 3 }]}
          data-test='component-guessed-words' />
      </div>
    );
  }
}

export default App;
