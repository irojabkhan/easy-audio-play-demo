import React, { useState, useEffect, useRef, useCallback } from "react";
import { Pause, Play } from "./Icons";

const PlayBtn = ({
  audioRef,
  progressBarRef,
  timeProgress,
  duration,
  setTimeProgress,
  playButton,
  pauseButton,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    if (progressBarRef.current) {
      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(progressBarRef.current.value / duration) * 100}%`
      );
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  useEffect(() => {
    if (timeProgress === duration) {
      setIsPlaying(false);
      audioRef.current.currentTime = 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeProgress]);

  return (
    <div className="ra-play">
      <button onClick={togglePlayPause}>
        {isPlaying ? pauseButton || <Pause /> : playButton || <Play />}
      </button>
    </div>
  );
};

export default PlayBtn;
