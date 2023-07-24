import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "../../components/Main/Main";
import { useParams } from "react-router-dom";

const Url = "https://project-2-api.herokuapp.com/videos/";
const ApiKey = "?api_key=5f12a68e-bc27-4d92-a89f-64d9ecce99b6/";

const HomePage = () => {
  const [Vids, setVids] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();

  const getVideoById = (id) => {
    axios
      .get(`${Url}${id}${ApiKey}`)
      .then((response) => {
        console.log(response.data);
        setCurrentVideo(response.data);
        setComments(response.data.comments);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get(Url + ApiKey).then((response) => {
      console.log(response.data);
      setVids(response.data);
      const videoId = params.id || response.data[0]?.id || "";
      getVideoById(videoId);
    });
  }, [params.id]);

  useEffect(() => {
    const videoId = params.id || Vids[0]?.id || "";
    console.log(videoId);
    if (currentVideo.id !== videoId) {
      getVideoById(videoId);
    }
  }, [currentVideo, Vids, params.id]);

  if (!Vids?.length || !Object.keys(currentVideo)?.length || !comments?.length) {
    return "Loading...";
  }
  
  

  return (
    <>
      <Main currentVideo={currentVideo} Vids={Vids} comments={comments} />
    </>
  );
};

export default HomePage;
