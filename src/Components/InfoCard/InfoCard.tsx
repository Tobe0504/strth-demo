import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import classes from "./InfoCard.module.css";

type InfoCardProps = {
  title: string;
  value: string | number;
  biValue?: boolean;
  secondValue?: string | number;
};

const InfoCard = ({ title, value, biValue, secondValue }: InfoCardProps) => {
  return (
    <div className={classes.card}>
      {biValue ? (
        <h4>
          <span>{value}</span> of {secondValue}
        </h4>
      ) : (
        <h4> {value}</h4>
      )}
      <p>{title}</p>
      <ErrorOutlineOutlinedIcon />
    </div>
  );
};

export default InfoCard;
