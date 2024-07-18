"use client"

import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const LudiminoVideo = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      playerRef.current = videojs(videoElement, {
        controls: false,
        responsive: true,
        fluid: true,
        autoplay: true,
        loop: true,
        muted: true,
        preload: 'auto',
        sources: [{
          src: '/LudiminoBack_Video.mp4',
          type: 'video/mp4'
        }],
      }, () => {
        console.log('Player is ready');
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin rounded-lg" />
    </div>
  );
};

export default LudiminoVideo;
