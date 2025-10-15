import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useLocation, useNavigate } from "react-router";
import classes from "./AppLayoutHeader.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderSideNav from "../HeaderSideNav/HeaderSideNav";
import { useRef } from "react";

type AppLayoutHeaderProps = {
  title?: string;
  description?: string;
};

const AppLayoutHeader = ({ title, description }: AppLayoutHeaderProps) => {
  // Router
  const navigate = useNavigate();
  const location = useLocation();

  // Refs
  const sideNav = useRef<HTMLDivElement>(null);

  // Utils
  const openSideNav = () => {
    if (sideNav.current) {
      sideNav.current.style.width = "100%";
    }
  };

  const closeSideNav = () => {
    if (sideNav.current) {
      sideNav.current.style.width = "0%";
    }
  };

  return (
    <section className={classes.container}>
      <div className={classes.leftSection}>
        <h4>{title || ""}</h4>
        <p>{description || ""}</p>
      </div>

      <div
        className={classes.rightSection}
        onClick={() => {
          navigate("/notifications");
        }}
      >
        <NotificationsNoneIcon
          fontSize="medium"
          color="inherit"
          style={{
            color: location.pathname === "/notifications" ? "#335F32" : "#fff",
          }}
        />
        <span>2</span>
      </div>

      <div className={classes.hamburgerMenu} onClick={openSideNav}>
        <MenuIcon />
      </div>

      <div className={classes.sideNav} ref={sideNav}>
        <HeaderSideNav closeSideNav={closeSideNav} />
      </div>
    </section>
  );
};

export default AppLayoutHeader;
