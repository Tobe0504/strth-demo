import classes from "./VideoPlayer.module.css";
import layerImage from "../../Assets/Images/layerImage.svg";
import play2 from "../../Assets/Images/play2.png";

import { useEffect, useState } from "react";

type VideoPlayerProps = {
  height: string;
  url: string;
  thumbnail?: string;
  id?: string;
  onPlay?: () => void;
  onPause?: () => void;
};

const VideoPlayer = ({
  height,
  url,
  thumbnail,
  id,
  onPlay,
  onPause,
}: VideoPlayerProps) => {
  // States
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayThumbnail, setDisplayThumbnail] = useState(true);

  // Utils
  const video = document.querySelector("video");
  const playPauseHandler = () => {
    if (video && !isPlaying) {
      video.play();
    } else if (isPlaying) {
      video?.pause();
    }

    setIsPlaying((prevState) => {
      return !prevState;
    });
  };

  let timeout: any;

  const displayThumbnailHandler = () => {
    if (!isPlaying)
      timeout = setTimeout(() => {
        setDisplayThumbnail(true);
      }, 5000);
  };

  useEffect(() => {
    displayThumbnailHandler();

    // eslint-disable-next-line
  }, [isPlaying]);

  return (
    <div className={classes.container}>
      <video
        controls
        style={{ height }}
        id="video"
        onPlaying={() => {
          setIsPlaying(true);
          clearTimeout(timeout);
          setDisplayThumbnail(false);
        }}
        onPause={() => {
          setIsPlaying(false);
          if (onPause) {
            onPause();
          }
        }}
        onPlay={() => {
          if (onPlay) {
            onPlay();
          }
        }}
      >
        <source
          src={
            "https://res.cloudinary.com/dmpdhnjqs/video/upload/v1695719291/samples/sea-turtle.mp4" ||
            url
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && displayThumbnail && (
        <img
          src={thumbnail || layerImage}
          alt="Thumbnail"
          className={classes.thumbNail}
        />
      )}
      {!isPlaying && (
        <img
          src={play2}
          alt="Play button"
          className={classes.playPause}
          onClick={playPauseHandler}
        />

        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   width="160"
        //   height="160"
        //   viewBox="0 0 160 160"
        //   fill="none"
        //   onClick={playPauseHandler}
        //   className={classes.playPause}
        // >
        //   <path
        //     d="M98.3462 74.453L77.0313 60.2431C72.601 57.2895 66.6667 60.4655 66.6667 65.7901V94.2099C66.6667 99.5345 72.601 102.71 77.0313 99.7569L98.3462 85.547C102.304 82.9082 102.304 77.0918 98.3462 74.453Z"
        //     stroke="#F7F7F7"
        //     strokeWidth="2"
        //     strokeLinecap="round"
        //     strokeLinejoin="round"
        //   />
        //   <path
        //     d="M140 80C140 113.137 113.137 140 80 140C46.8629 140 20 113.137 20 80C20 46.8629 46.8629 20 80 20C113.137 20 140 46.8629 140 80Z"
        //     stroke="#F7F7F7"
        //     strokeWidth="2"
        //     strokeLinecap="round"
        //     strokeLinejoin="round"
        //   />
        // </svg>
      )}
    </div>
  );
};

export default VideoPlayer;
