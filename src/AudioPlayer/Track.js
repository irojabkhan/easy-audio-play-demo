import React from "react";
const Track = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  trackTitle,
  cover,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    if (progressBarRef.current) {
      progressBarRef.current.max = seconds;
    }
  };

  return (
    <div className="ra-track">
      {cover && currentTrack.thumbnail && (
        <img
          className="ra-track-thumbnail"
          src={currentTrack.thumbnail}
          alt={currentTrack.title}
        />
      )}
      {trackTitle && <p className="track-title">{currentTrack.title}</p>}
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />
    </div>
  );
};
export default Track;
