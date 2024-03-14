import React from 'react';
import Video from 'video.js'; 

const LudiminoVideo = () => {
  return (
    <div>
      <Video
        responsive
        width="100%"
        height="100%"
        url="/LudiminoBack_Video" 
      />
    </div>
  );
};

export default LudiminoVideo;
