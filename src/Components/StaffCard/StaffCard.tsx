import classes from "./StaffCard.module.css";
import play from "../../Assets/Images/play.png";
import play2 from "../../Assets/Images/play2.png";

type StaffCardProps = {
  name: string;
  role: string;
  image: string;
};

const StaffCard = ({ name, role, image }: StaffCardProps) => {
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <img src={play} alt="Play" />
      <div className={classes.detailSection}>
        <h6>{name}</h6>
        <p>{role}</p>
      </div>

      <div className={classes.hoverOverlay}>
        <img src={play2} alt="Play" />
        <h6>Hear From {name}</h6>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default StaffCard;
