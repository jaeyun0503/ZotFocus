// StudyTimer.js

import React, { useState, useEffect } from "react";

const StudyTimer = () => {
  // State to store the user input and countdown time
  const [studyTime, setStudyTime] = useState(0);
  const [countdown, setCountdown] = useState(0);

  // State to manage the timer interval
  const [timerInterval, setTimerInterval] = useState(null);

  // Function to handle the input change
  const handleInputChange = (event) => {
    setStudyTime(parseInt(event.target.value, 10));
  };

  // Function to start the countdown timer
  const startTimer = () => {
    if (studyTime > 0) {
      setCountdown(studyTime * 60);
      setTimerInterval(setInterval(updateCountdown, 1000));
    }
  };

  // Function to update the countdown every second
  const updateCountdown = () => {
    setCountdown((prevCountdown) => {
      if (prevCountdown === 0) {
        clearInterval(timerInterval);
        setTimerInterval(null);
        // You can add additional logic here when the timer reaches 0
      }
      return prevCountdown - 1;
    });
  };

  // Function to stop the timer
  const stopTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
    setCountdown(0);
  };

  // Cleanup the interval when the component unmounts
  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]);

  return (
    <div>
      <label>
        Study Time (minutes):
        <input type="number" value={studyTime} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <br />
      <p>Countdown: {countdown} seconds</p>
    </div>
  );
};

export default StudyTimer;
