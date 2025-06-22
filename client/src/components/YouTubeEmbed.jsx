import React from "react";

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div
      style={{
        width: "1200px",
        height: "700px",
        margin: "2rem auto",
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
