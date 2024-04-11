import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  const cells = range(5)
  return <p className="guess">{cells.map((index) => <span key={index} className="cell">{guess?.[index] ?? ''}</span>)}</p>
}

export default Guess;
