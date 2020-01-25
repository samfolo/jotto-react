export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;

  // let matches = 0;
  // let secretWordLetterArray = [...secretWord.split('')];

  // guessedWord.split('').forEach((letter) => {
  //   if (secretWordLetterArray.includes(letter)) {
  //     matches++;
  //     secretWordLetterArray = secretWordLetterArray.filter(
  //       guessedLetter => guessedLetter !== letter
  //     );
  //   }
  // });

  // return matches;
};
