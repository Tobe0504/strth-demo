import { AxiosResponse } from "axios";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router";
import requestHandler from "../HelperFunctions/requestHandler";

type AuthUserContextValues = {
  userLoginDetails: { email: string; password: string };
  setUserLoginDetails: Dispatch<
    SetStateAction<{ email: string; password: string }>
  >;
  login: () => void;
  user: requestType;
  getDefaultPaymentObject: requestType;
  getDefaultPayments: () => void;
  getSummaryPayment: () => void;
  getSummaryPaymentObject: requestType;
  getSuccessfulPayment: () => void;
  getSuccessfulPaymentObject: requestType;
  getExpectedPaymentObject: requestType;
  getExpectedlPayment: () => void;
  logout: () => void;
};

type AuthUserContextProviderProps = {
  children: React.ReactNode;
};

export type requestType = {
  isLoading: boolean;
  data?: null | any[] | string | any;
  error?: null | any;
};

export const AuthUserContext = createContext({} as AuthUserContextValues);

const AuthUserContextProvider = ({
  children,
}: AuthUserContextProviderProps) => {
  // States
  const [user, setUser] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });
  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [getDefaultPaymentObject, setGetDefaultPaymentObject] =
    useState<requestType>({
      isLoading: false,
      data: null,
      error: null,
    });

  const [getSummaryPaymentObject, setGetSummaryPaymentObject] =
    useState<requestType>({
      isLoading: false,
      data: null,
      error: null,
    });

  const [getSuccessfulPaymentObject, setGetSuccessfulPaymentObject] =
    useState<requestType>({
      isLoading: false,
      data: null,
      error: null,
    });

  const [getExpectedPaymentObject, setGetgetExpectedPaymentObject] =
    useState<requestType>({
      isLoading: false,
      data: null,
      error: null,
    });

  //   Router
  const navigate = useNavigate();
  const location = useLocation();
  const previousLocation = location.state;

  //   requests
  const login = () => {
    setUser({
      isLoading: true,
      data: null,
      error: null,
    });
    requestHandler({
      url: `${process.env.REACT_APP_BACKEND_URL}/account/login`,
      method: "POST",
      data: userLoginDetails,
    })
      .then((res) => {
        setUser({
          isLoading: false,
          data: (res as AxiosResponse)?.data?.value?.value?.user,
          error: null,
        });
        localStorage.setItem(
          "giddaa-userToken",
          (res as AxiosResponse)?.data?.value?.value?.token
        );
        navigate(previousLocation || "/transactions-and-earnings/summary");
      })
      .catch((err) => {
        setUser({
          isLoading: false,
          data: null,
          error: err?.response?.data?.value?.message,
        });
      });
  };

  const getDefaultPayments = () => {
    setGetDefaultPaymentObject({
      isLoading: true,
      data: null,
      error: null,
    });
    requestHandler({
      url: `${process.env.REACT_APP_BACKEND_URL}/developer/transaction/get-missed-payments`,
      method: "GET",
    })
      .then((res) => {
        setGetDefaultPaymentObject({
          isLoading: false,
          data: (res as AxiosResponse)?.data?.value,
          error: null,
        });
      })
      .catch((err) => {
        setGetDefaultPaymentObject({
          isLoading: false,
          data: null,
          error: err?.response?.data?.value?.message,
        });
      });
  };

  const getSummaryPayment = () => {
    setGetSummaryPaymentObject({
      isLoading: true,
      data: null,
      error: null,
    });
    requestHandler({
      url: `${process.env.REACT_APP_BACKEND_URL}/developer/transaction/get-succesful-payments`,
      method: "GET",
    })
      .then((res) => {
        setGetSummaryPaymentObject({
          isLoading: false,
          data: (res as AxiosResponse)?.data?.value,
          error: null,
        });
      })
      .catch((err) => {
        setGetSummaryPaymentObject({
          isLoading: false,
          data: null,
          error: err?.response?.data?.value?.message,
        });
      });
  };

  const getSuccessfulPayment = () => {
    setGetSuccessfulPaymentObject({
      isLoading: true,
      data: null,
      error: null,
    });
    requestHandler({
      url: `${process.env.REACT_APP_BACKEND_URL}/developer/transaction/get-succesful-payments`,
      method: "GET",
    })
      .then((res) => {
        setGetSuccessfulPaymentObject({
          isLoading: false,
          data: (res as AxiosResponse)?.data?.value,
          error: null,
        });
      })
      .catch((err) => {
        setGetSuccessfulPaymentObject({
          isLoading: false,
          data: null,
          error: err?.response?.data?.value?.message,
        });
      });
  };

  const getExpectedlPayment = () => {
    setGetgetExpectedPaymentObject({
      isLoading: true,
      data: null,
      error: null,
    });
    requestHandler({
      url: `${process.env.REACT_APP_BACKEND_URL}/developer/transaction/get-expected-payments`,
      method: "GET",
    })
      .then((res) => {
        setGetgetExpectedPaymentObject({
          isLoading: false,
          data: (res as AxiosResponse)?.data?.value,
          error: null,
        });
      })
      .catch((err) => {
        setGetgetExpectedPaymentObject({
          isLoading: false,
          data: null,
          error: err?.response?.data?.value?.message,
        });
      });
  };

  const logout = () => {
    localStorage.removeItem("giddaa-userToken");

    navigate("/", { state: location.pathname });
  };

  return (
    <AuthUserContext.Provider
      value={{
        userLoginDetails,
        setUserLoginDetails,
        login,
        user,
        getDefaultPayments,
        getDefaultPaymentObject,
        getSummaryPayment,
        getSummaryPaymentObject,
        getSuccessfulPayment,
        getSuccessfulPaymentObject,
        getExpectedPaymentObject,
        getExpectedlPayment,
        logout,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContextProvider;
