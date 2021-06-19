import React from "react";
import ReactPlayer from "react-player/lazy";

const Stream = () => (
  <div className="homePage">
    <ReactPlayer
      controls={true}
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
    />
  </div>
);

export default Stream;
