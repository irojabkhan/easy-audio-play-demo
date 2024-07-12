# A Simple Audio Player for ReactJS

A lightweight and easy-to-use audio player component for ReactJS applications. This package provides a straightforward and efficient way to integrate audio playback into your React projects.

## Features

    • Simple and easy to use
    • Lightweight and fast
    • Customizable controls
    • Responsive design
    • Easy to integrate and use

## Installation

To install the package, use npm or yarn:

```sh
npm install easy-audio-play
```

or

```sh
yarn add easy-audio-play
```

## Usage

Here is a basic example of how to use the React Audio in your React application:

```sh
import React from 'react';
import AudioPlayer from 'easy-audio-play';

const tracks = [
  {
    title: "Track 1",
    src: 'path/to/track1.mp3',
    thumbnail: path/to/track1.jpg,
  },
  {
    title: "Track 2",
    src: 'path/to/track2.mp3',
    thumbnail: path/to/track2.jpg,
  },
];


function App() {
  return (
    <div>
      <h1>My Audio Player</h1>
      <AudioPlayer tracks={tracks} />
    </div>
  );
}

export default App;
```

## Props

    • tracks (array): List of tracks to play. Each track should be an object with src and title properties.
    • trackTitle (string): Title of the current track.
    • cover (boolean): Cover image for the current track.
    • progressBar (boolean): Show or hide the progress bar.
    • timeTrack (boolean): Show or hide the timer.
    • navigator (boolean): Show or hide the navigation buttons.
    • navigationButton (array): Set custom navigation button. First one for previous and second one for next.
    • playButton (string || React.Node): Set custom play button.
    • pauseButton (string || React.Node): Set custom pause button.

## Customization

You can customize the appearance and behavior of the audio player by adjusting the props provided.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.

Feel free to adjust the paths and prop descriptions as needed for your specific implementation.
