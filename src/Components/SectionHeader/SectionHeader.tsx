import classes from "./SectionHeader.module.css";

type SectionHeaderProps = {
  title: string;
  color?: string;
};

const SectionHeader = ({ title, color }: SectionHeaderProps) => {
  return (
    <h4 className={classes.container} style={{ color }}>
      {title}
    </h4>
  );
};

export default SectionHeader;
