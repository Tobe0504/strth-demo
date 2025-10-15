import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./SectionsNav.module.css";

type SectionsNavTypes = {
  navItems: {
    title: string;
    isActive: boolean;
    route?: string;
  }[];
  setNavItems: Dispatch<
    SetStateAction<
      {
        title: string;
        isActive: boolean;
        route?: string;
      }[]
    >
  >;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  isRouting?: boolean;
};

const SectionsNav = ({
  navItems,
  setNavItems,
  style,
  containerStyle,
  isRouting,
}: SectionsNavTypes) => {
  // ROuter
  const navigate = useNavigate();
  const { subTransactions } = useParams();

  // utils
  const activeChangeHandler = (index: number) => {
    const navCopy = [...navItems].map((datum, i) => {
      if (i === index) {
        return {
          ...datum,
          isActive: true,
        };
      }

      return {
        ...datum,
        isActive: false,
      };
    });
    setNavItems(navCopy);

    if (isRouting) {
      navigate(
        `/transactions-and-earnings/${
          navItems.find((data) => data.isActive)?.route as string
        }`
      );
    }
  };

  useEffect(() => {
    if (isRouting) {
      setNavItems(
        navItems.map((data) => {
          if (data?.route === subTransactions) {
            return {
              ...data,
              isActive: true,
            };
          } else {
            return {
              ...data,
              isActive: false,
            };
          }
        })
      );
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.listNav} style={containerStyle}>
        {navItems.map((data, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                activeChangeHandler(i);

                if (isRouting) {
                  navigate(
                    `/transactions-and-earnings/${data?.route as string}`
                  );
                }
              }}
              className={
                data.isActive ? `${classes.activeDiv}` : `${classes.div}`
              }
              style={style}
            >
              <span>{data.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionsNav;
