import React from 'react';
import {range} from '../../utils';
import {checkGuess} from '../../game-helpers';

function Guess({guess, id, answer}) {

  const guessLetters = (guess) ? [...guess]  : '';
  const letterStatus = checkGuess(guess, answer) ?? range(5);

  letterStatus.map((result, key) => {

    letterStatus[key] = (((typeof result) === 'object'))
      ? 'cell ' + result.status 
      : 'cell';

  });

  return (

    <p className="guess" key={id}>
     { 
         range(5).map((index) => {
           return (
            <span 
              className={letterStatus[index]}
              key={index}>
                {guessLetters[index]}
            </span>
           )

         })
      }
      
    </p>
  
  ) 
  
  
}

export default Guess;
