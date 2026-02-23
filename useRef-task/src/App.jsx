import React, { useState, useRef } from 'react';
import './App.css';

function TimerApp() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) {
      return;
    }
    
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setIsRunning(true);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="timer-app">
      <div className="timer-card">
        <h1 className="timer-title">Таймер</h1>
        <div className="timer-display">
          <span className="time-number">{formatTime(time)}</span>
          <span className="time-label">минути:секунди</span>
        </div>
        <div className="timer-controls">
          <button 
            onClick={startTimer} 
            className="btn btn-start"
            disabled={isRunning}
          >
            ▶ Старт
          </button>
          <button 
            onClick={pauseTimer} 
            className="btn btn-pause"
          >
            ⏸ Пауза
          </button>
          <button 
            onClick={resetTimer} 
            className="btn btn-reset"
          >
            ⏹ Нулиране
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimerApp;