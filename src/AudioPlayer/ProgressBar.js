import React from "react";

const ProgressBar = ({ progressBarRef, audioRef }) => {
  const handleProgressChange = () => {
    if (progressBarRef.current) {
      audioRef.current.currentTime = progressBarRef.current.value;
    }
  };

  return (
    <div className="ra-progress">
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
    </div>
  );
};
export default ProgressBar;
