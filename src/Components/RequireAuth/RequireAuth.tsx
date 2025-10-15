import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthUserContext } from "../../Context/AuthUserContext";
import Loader from "../Loader/Loader";

const RequireAuth = () => {
  // Local storage
  const userToken = localStorage.getItem("strathmore-userToken");
  // Location
  const location = useLocation();

  // Context
  const { user } = useContext(AuthUserContext);

  return (
    <>
      {user.isLoading && userToken ? (
        <Loader />
      ) : !user.isLoading && userToken ? (
        <Outlet />
      ) : (
        <Navigate to="/sign-in" replace={true} state={location.pathname} />
      )}
    </>
  );
};

export default RequireAuth;
