import React from 'react';

function GuessInput({gameStatus, handleNextGuess}) {

  const [guess, setGuess] = React.useState('');

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({guess});
        handleNextGuess(guess);
        setGuess('');
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        id="guess-input"
        type="text"
        value={ guess }
        disabled={(gameStatus !== 'running')}
        onChange={(event) => {
          const newGuess = event.target.value.toUpperCase();
          setGuess( newGuess );
        }}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        >
      </input>
    </form>
  );
}

export default GuessInput;
