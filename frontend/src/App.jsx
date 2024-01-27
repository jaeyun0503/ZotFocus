import React, { useState } from "react";
import StudyTimer from "./StudyTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./App.css"; // Import your stylesheet

function App() {
  const [showStudyTimer, setShowStudyTimer] = useState(false);

  const toggleStudyTimer = () => {
    setShowStudyTimer(!showStudyTimer);
  };

  return (
    <div className="app-container">
      <div className="spacer"></div>
      <div className="dropdown-container">
        <button
          onClick={toggleStudyTimer}
          className={`navbar-button ${showStudyTimer ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faClock} />
        </button>
        {showStudyTimer && <StudyTimer />}
      </div>
    </div>
  );
}

export default App;
