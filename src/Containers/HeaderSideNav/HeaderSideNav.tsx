import SideNav from "../SideNav/SideNav";
import classes from "./HeaderSideNav.module.css";
import CloseIcon from "@mui/icons-material/Close";

type HeaderSideNavProps = {
  closeSideNav: () => void;
  isHome?: boolean;
};

const HeaderSideNav = ({ closeSideNav, isHome }: HeaderSideNavProps) => {
  return (
    <section className={classes.container}>
      <div className={classes.close}>
        <CloseIcon onClick={closeSideNav} />
      </div>
      <SideNav isHome={isHome} />
    </section>
  );
};

export default HeaderSideNav;
