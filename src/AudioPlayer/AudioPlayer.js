import React, { useState, useRef } from "react";

import "./styles/react-audio.css";

import PlayBtn from "./PlayBtn";
import Track from "./Track";
import ProgressBar from "./ProgressBar";
import TimeTrack from "./TimeTrack";
import Navigator from "./Navigator";

const AudioPlayer = ({
  trackTitle,
  progressBar,
  tracks,
  navigator,
  timeTrack,
  cover,
  playButton,
  pauseButton,
  navigationButton,
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[currentTrackIndex]);

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNextTrack = () => {
    const nextTrackIndex = currentTrackIndex + 1;
    if (nextTrackIndex < tracks.length) {
      setCurrentTrackIndex(nextTrackIndex);
      setCurrentTrack(tracks[nextTrackIndex]);
    }
  };

  const handlePreviousTrack = () => {
    const prevTrackIndex = currentTrackIndex - 1;
    if (prevTrackIndex < tracks.length && prevTrackIndex >= 0) {
      setCurrentTrackIndex(prevTrackIndex);
      setCurrentTrack(tracks[prevTrackIndex]);
    }
  };

  return (
    <div className="ra-player">
      <Track
        {...{
          currentTrack,
          audioRef,
          setDuration,
          progressBarRef,
          trackTitle,
          cover,
        }}
      />
      {progressBar && <ProgressBar {...{ progressBarRef, audioRef }} />}

      <PlayBtn
        {...{
          audioRef,
          progressBarRef,
          timeProgress,
          duration,
          setTimeProgress,
          handleNextTrack,
          playButton,
          pauseButton,
        }}
      />

      {navigator && (
        <Navigator
          {...{
            prev: handlePreviousTrack,
            next: handleNextTrack,
            navigationButton,
          }}
        />
      )}

      {timeTrack && (
        <TimeTrack {...{ timeProgress, duration, setTimeProgress }} />
      )}
    </div>
  );
};

export default AudioPlayer;
