import React from 'react';

function GuessInput() {
  const [guessText, setGuessText] = React.useState('');

  return <form
    className="guess-input-wrapper"
    onSubmit={(event) => {
      event.preventDefault();
      const submittedGuess = event.target.elements['guess-input'].value.toUpperCase();
      console.log({ submittedGuess });
      setGuessText('');
    }}
  >
    <label htmlFor="guess-input">Enter guess:</label>
    <input
      id="guess-input"
      type="text"
      value={guessText}
      required
      pattern='^[A-Za-z]{5}$'
      title='5 letter word'
      onChange={(event) => setGuessText(event.target.value)}
    />
  </form>;
}

export default GuessInput;