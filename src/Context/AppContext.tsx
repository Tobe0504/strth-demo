import { createContext, Dispatch, SetStateAction, useState } from "react";
import { headerNavItemsType, sideNavItems } from "../Utilities/navitems";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppCOntextValues = {
  navItemsState: headerNavItemsType;
  setNavItemsState: Dispatch<SetStateAction<headerNavItemsType>>;
};

export const AppContext = createContext({} as AppCOntextValues);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // States
  const [navItemsState, setNavItemsState] = useState<headerNavItemsType>(
    sideNavItems.map((data) => {
      return { ...data, isActive: false };
    })
  );

  return (
    <AppContext.Provider
      value={{
        navItemsState,
        setNavItemsState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
