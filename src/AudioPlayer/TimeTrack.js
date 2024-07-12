import React from "react";

const TimeTrack = ({ timeProgress, duration }) => {
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div className="time-track">
      <span className="time current-time">{formatTime(timeProgress)}</span>/
      <span className="time total-time">{formatTime(duration)}</span>
    </div>
  );
};

export default TimeTrack;
