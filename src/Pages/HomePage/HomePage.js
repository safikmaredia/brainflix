import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "../../components/Main/Main";
import { useParams } from "react-router-dom";

const Url = "http://localhost:3000/videos/";

const HomePage = () => {
  const [Vids, setVids] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();

  const getVideoById = (id) => {
    axios
      .get(`${Url}${id}?apiKey=${process.env.REACT_APP_Url}`)
      .then((response) => {
        setCurrentVideo(response.data);
        setComments(response.data.comments);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`${Url}?apiKey=${process.env.REACT_APP_Url}`)
      .then((response) => {
        setVids(response.data);
        const videoId = params.id || response.data[0]?.id || "";
        getVideoById(videoId);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  useEffect(() => {
    const videoId = params.id || Vids[0]?.id || "";
    if (currentVideo.id !== videoId) {
      getVideoById(videoId);
    }
  }, [currentVideo, Vids, params.id]);

  if (!Vids?.length || !Object.keys(currentVideo)?.length || !comments?.length) {
    return "Loading...";
  }

  return (
    <Main currentVideo={currentVideo} Vids={Vids} comments={comments} />
  );
};

export default HomePage;
