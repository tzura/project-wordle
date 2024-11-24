import React from 'react';
import Banner from '../Banner';

function WonBanner({ numOfGuesses }) {
  return (
    <Banner
      status='happy'>
      <p>
        <strong>Congratulations!</strong>
        You got it in <strong>{numOfGuesses}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
