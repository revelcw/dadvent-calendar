import React, { useState } from 'react';
import useVisibilityChange from 'use-visibility-change';
import './styles.css';
import Door from './Door';
import { About } from './About';

const days = [...Array(25).keys()]; // [0, 1, ..., 24]

const jokevent =
  window.location.hostname.split('.')[0] === 'jokevent' ||
  window.location.hostname.split('.')[1] === 'netlify';

export default function App() {
  const [date, setDate] = useState(new Date().getDate());
  useVisibilityChange({
    onShow: () => {
      setDate(new Date().getDate());
    },
  });
  return (
    <div className="App">
      <h1>
        {jokevent ? "G'ma Jane's Joke-vent Calendar" : 'Dadvent Calendar'}
      </h1>
      <About />

      <div className="container">
        {days.map((index) => (
          <Door date={date} number={index + 1} />
        ))}
      </div>
    </div>
  );
}
