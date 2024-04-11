import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED)

  return <div class="guess-results">
    {rows.map((index) => <Guess key={index} guess={guesses[index]} />)}
  </div>;
}

export default GuessResults;
