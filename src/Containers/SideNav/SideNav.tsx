import classes from "./SideNav.module.css";
import logo from "../../Assets/Images/logo.png";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { Link, useLocation } from "react-router-dom";
import { activeToggler } from "../../HelperFunctions/activeTogglers";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AuthUserContext } from "../../Context/AuthUserContext";
import { headerNavItems } from "../../Utilities/navitems";

type SideNavProps = {
  isHome?: boolean;
};

const SideNav = ({ isHome }: SideNavProps) => {
  // Context
  const { navItemsState, setNavItemsState } = useContext(AppContext);
  const { logout } = useContext(AuthUserContext);

  //   Router
  const location = useLocation();
  return (
    <section className={classes.container}>
      <img src={logo} alt="Giddaa logo" />

      {!isHome ? (
        <div className={classes.routesSection}>
          {navItemsState.map((data, i) => {
            if (data?.otherOptions) {
              return (
                <div key={i}>
                  <div
                    key={i}
                    className={
                      data.keywords?.includes(location.pathname.slice(1)) ||
                      data.route === location.pathname ||
                      data.route?.includes(location.pathname.split("/")[1])
                        ? classes.moreMenuContentActive
                        : classes.moreMenuContentInActive
                    }
                    onClick={() => {
                      activeToggler(i, navItemsState, setNavItemsState);
                    }}
                  >
                    <span className={classes.link}>
                      <span>{data.icons}</span>
                    </span>

                    <span className={classes.link}>
                      <span>{data.title}</span>
                    </span>

                    <KeyboardArrowDownOutlinedIcon
                      style={
                        data.isActive
                          ? {
                              transform: "rotate(-90deg)",
                              transition: "all .3s ease-in-out",
                            }
                          : {
                              transform: "rotate(0deg)",
                              transition: "all .3s ease-in-out",
                            }
                      }
                    />
                  </div>
                  <div
                    className={classes.otherOptions}
                    style={
                      data.isActive
                        ? { maxHeight: "1000px" }
                        : { maxHeight: "0px" }
                    }
                  >
                    {data.otherOptions?.data?.map((datum: any, j: number) => {
                      return (
                        <Link to={datum.route} key={j}>
                          {datum.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                to={data.route as string}
                key={i}
                className={
                  data.keywords?.includes(location.pathname.slice(1)) ||
                  data.route === location.pathname ||
                  data.route?.includes(location.pathname.split("/")[1])
                    ? classes.active
                    : classes.inActive
                }
              >
                <span>{data.icons}</span>
                <span>{data.title}</span>
              </Link>
            );
          })}

          <div className={classes.logout} onClick={logout}>
            <span>Log out</span>
            <span>
              <ExitToAppIcon />
            </span>
          </div>
        </div>
      ) : (
        <div className={classes.routesSection}>
          {headerNavItems.map((navItem: any, i: number) => {
            return (
              <Link
                to={navItem?.route}
                className={
                  location.pathname === navItem.route
                    ? classes.active
                    : classes.inActive
                }
                key={i}
              >
                <span> {navItem?.title}</span>
                <span></span>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default SideNav;
