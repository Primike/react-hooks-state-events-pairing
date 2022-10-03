import React, {useState} from "react";
import video from "../data/video.js";
import VideoInfo from "./VideoInfo.js";
import Comments from "./Comments.js";

function App() {
  const [videoInfo, setVideoInfo] = useState(video)

  function changeVotes(vote) {
    let x = {...videoInfo}
    if(vote) {
      x.upvotes += 1
      setVideoInfo(x)
    } else {
      x.downvotes += 1
      setVideoInfo(x)
    }
    console.log(videoInfo.upvotes)
  }

  return (
    <>
      <div className="App">
        <iframe
          width = "919"
          height = "525"
          src = {video.embedUrl}
          frameBorder = "0"
          allowFullScreen
          title = "Thinking in React"
        />
      </div>
      <VideoInfo videoInfo = {videoInfo} changeVotes = {changeVotes}/>
      <Comments comments = {videoInfo.comments}/>
    </>
  );
}

export default App;
