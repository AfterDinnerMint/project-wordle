import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const gameWon = guesses.includes(answer);
  const gameLost = !gameWon && guesses.length === 6;

  return <>
    <GuessResults answer={answer} guesses={guesses} />
    {gameWon && <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
      </p>
    </div>}
    {gameLost && <div class="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>}
    <GuessInput onGuess={(guess) => setGuesses([...guesses, guess])} />
  </>;
}

export default Game;
