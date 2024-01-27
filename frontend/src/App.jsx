import React, { useState } from "react";
import StudyTimer from "./StudyTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [showStudyTimer, setShowStudyTimer] = useState(false);

  const toggleStudyTimer = () => {
    setShowStudyTimer(!showStudyTimer);
  };

  return (
    <div className="app-container">
      <div className="countdown-button">
        {" "}
        <button
          onClick={toggleStudyTimer}
          className={`navbar-button ${showStudyTimer}`}
        >
          <FontAwesomeIcon icon={faClock} />
        </button>
        {showStudyTimer && <StudyTimer />}
      </div>
    </div>
  );
}

export default App;
