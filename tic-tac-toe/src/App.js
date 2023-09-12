// App.js
import React, { useEffect, useState } from 'react';
import GameBoard from './Component/GameBoard';
import "./App.css"

const App = () => {
  const [scores, setScores] = useState({
    blue: 0,
    red: 0,
  });

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('ticTacToeScores'));
    if (storedScores) {
      setScores(storedScores);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ticTacToeScores', JSON.stringify(scores));
  }, [scores]);

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <div className="scores">
        <div className="score blue">Blue: {scores.blue}</div>
        <div className="score red">Red: {scores.red}</div>
      </div>
      <GameBoard scores={scores} setScores={setScores} />
    </div>
  );
};

export default App;
