import React from 'react';

function GuessResults({ guesses }) {
  return <div class="guess-results">
    {guesses.map((guess, i) => <p className="guess" key={i}>{guess}</p>)}
  </div>;
}

export default GuessResults;
