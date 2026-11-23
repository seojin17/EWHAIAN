import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning]);

  const handleToggle = useCallback(() => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  }, []);

  const handleReset = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    setSeconds(0);
  }, []);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }, [seconds]);

  return (
    <main className="timer">
      <p className="timer-time">{formattedTime}</p>

      <div className="timer-buttons">
        <button
          className={isRunning ? 'running' : ''}
          onClick={handleToggle}
        >
          {isRunning ? '정지' : '시작'}
        </button>
        <button onClick={handleReset}>리셋</button>
      </div>
    </main>
  );
}

export default App;