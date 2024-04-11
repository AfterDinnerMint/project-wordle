import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ answer, guess }) {
  const cells = range(5)
  const checkedGuess = checkGuess(guess, answer);
  return <p className="guess">{cells.map((index) => <span key={index} className={`cell ${checkedGuess?.[index].status}`}>
    {checkedGuess?.[index].letter ?? ''}
  </span>)}</p>
}

export default Guess;
