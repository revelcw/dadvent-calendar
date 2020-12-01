import React, { useState } from 'react';
import useVisibilityChange from 'use-visibility-change';
import jokes from './jokes.json';
import './styles.css';
import Door from './Door';

export default function App() {
  const [date, setDate] = useState(new Date().getDate());
  useVisibilityChange({
    onShow: () => {
      setDate(new Date().getDate());
    },
  });
  return (
    <div className="App">
      <h1>G'ma Jane's Joke-vent Calendar</h1>
      <h2>
        by Revel Carlberg West{' '}
        <a
          href="https://twitter.com/revelcw"
          rel="noopener noreferrer"
          target="_blank"
        >
          @revelcw
        </a>
      </h2>
      <div className="container">
        {jokes.map((joke, index) => (
          <Door joke={joke} date={date} number={index + 1} />
        ))}
      </div>
    </div>
  );
}
