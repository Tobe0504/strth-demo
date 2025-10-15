import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import classes from "./HomePageHowItWorks.module.css";

const HowItWorksVideo = () => {
  return (
    <div className={classes.modalContainer}>
      <VideoPlayer
        url="https://res.cloudinary.com/dmpdhnjqs/video/upload/v1695719294/samples/elephants.mp4"
        height="inherit"
      />
    </div>
  );
};

export default HowItWorksVideo;
