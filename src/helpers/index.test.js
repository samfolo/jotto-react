import React from 'react';
import { getLetterMatchCount } from './';
import { exportAllDeclaration } from '@babel/types';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';

  it('returns the correct count when theere are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });
  
  it('returns the correct count when theere are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });
  
  it('returns the correct count when theere are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
