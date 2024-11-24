import React from 'react';
import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [gameStatus, setGameStatus] = React.useState('running');
  const [guessResults, setGuessResults] = React.useState([]);

  function handleNextGuess(guess) {
    guessResult = {
      guess: guess,
      id: crypto.randomUUID()
    }
    newGuessResults = [...guessResults, guessResult];
    setGuessResults(newGuessResults);

    
    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
      console.log('won');
    } else if (newGuessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
      console.log('lost');
    }

  

  }

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput  gameStatus={gameStatus} handleNextGuess={handleNextGuess}/>
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guessResults.length} />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} />
      )}
    </>
  );
}

export default Game;
