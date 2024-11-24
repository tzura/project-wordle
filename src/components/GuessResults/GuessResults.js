import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({guessResults, answer}) {

  
  return (
    
    <div className="guess-results">
      {

        range(NUM_OF_GUESSES_ALLOWED).map((index) => {

          guess = (guessResults[index]) ? guessResults[index].guess : null;
          id = (guessResults[index]) ? guessResults[index].id : null;

          return (
            <Guess guess={guess} id={id} key={index} answer={answer} />
          )
            
        })

      }
   </div>
  );
}

export default GuessResults;
