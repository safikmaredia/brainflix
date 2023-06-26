import React, { useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Vids from './Assets/Data/video-details.json';
import Main from './components/Main/Main';

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(Vids[0]);

  const changeVideo = (id) => {
    const newVideoId = Vids.findIndex(video => id === video.id);
    setCurrentVideo(Vids[newVideoId]);
  };

  return (
    <>
      <Header />
      <Main
        Vids={Vids}
        currentVideo={currentVideo}
        changeVideo={changeVideo}
      />
    </>
  );
};

export default App;