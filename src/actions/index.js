export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
}

export const guessWord = (guessedWord) => {
  return (dispatch, getState ) => { 
    return {
      type: actionTypes.GUESS_WORD,
      payload: guessedWord,
    }
  };
}
