import React, { useState, useEffect } from "react";
import "./Clock.css";

function Clock() {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  const updateTime = () => {
    currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  });

  return (
    <div className="clockContainer">
      <h3>{time}</h3>
    </div>
  );
}

export default Clock;
