// StudyTimer.js

import React, { useState, useEffect } from "react";

function StudyTimer() {
  // State to store the user input and countdown time
  let studyTime = 0;
  // const [studyTime, setStudyTime] = useState(0);
  const [studyHour, setStudyHour] = useState();
  const [studyMinute, setStudyMinute] = useState();
  const [countdown, setCountdown] = useState(0);

  // State to manage the timer interval and pause status
  const [timerInterval, setTimerInterval] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Function to handle the input change
  const handleHourInputChange = (event) => {
    const inputValue = event.target.value;
    setStudyHour(inputValue === "" ? 0 : parseInt(inputValue, 10));
  };

  const handleMinuteInputChange = (event) => {
    const inputValue = event.target.value;
    setStudyMinute(inputValue === "" ? 0 : parseInt(inputValue, 10));
  };

  // Function to start or resume the countdown timer
  const startTimer = () => {
    console.log(studyHour);
    console.log(studyMinute);
    studyTime = studyHour * 3600 + studyMinute * 60;

    if (studyTime > 0 && !timerInterval) {
      setCountdown(studyTime);
      setTimerInterval(setInterval(updateCountdown, 1000));
    } else if (isPaused) {
      setIsPaused(false);
      setTimerInterval(setInterval(updateCountdown, 1000));
    }
  };

  // Function to pause the timer
  const pauseTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
    setIsPaused(true);
  };

  // Function to stop the timer
  const stopTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
    setCountdown(0);
    setIsPaused(false);
  };

  // Function to update the countdown every second
  const updateCountdown = () => {
    setCountdown((prevCountdown) => {
      if (prevCountdown === 0) {
        clearInterval(timerInterval);
        setTimerInterval(null);
        // You can add additional logic here when the timer reaches 0
      }
      return isPaused ? prevCountdown : prevCountdown - 1;
    });
  };

  // Function to format seconds into (minutes: seconds) format
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours}h${minutes}m${seconds < 10 ? "0" : ""}${seconds}s`;
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
        <input
          type="number"
          value={studyHour === 0 ? "" : studyHour}
          onChange={handleHourInputChange}
        />
        Hours
        <input
          type="number"
          value={studyMinute === 0 ? "" : studyMinute}
          onChange={handleMinuteInputChange}
        />
        Minutes
      </label>
      <br />
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={stopTimer}>Stop</button>
      <br />
      <p>Countdown: {formatTime(countdown)}</p>
    </div>
  );
}

export default StudyTimer;
