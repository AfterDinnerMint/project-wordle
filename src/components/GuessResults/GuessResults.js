import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ answer, guesses }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED)

  return <div class="guess-results">
    {rows.map((index) => <Guess key={index} answer={answer} guess={guesses[index]} />)}
  </div>;
}

export default GuessResults;
