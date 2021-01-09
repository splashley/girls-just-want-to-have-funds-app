import React from "react";
import useStickyState from "./useLocalStorageHook";

export const UserInfoContext = React.createContext(null);

export const UserInfoContextProvider = ({ children }) => {
  const [userName, setUserName] = useStickyState("", "userName");
  const [test, setTest] = React.useState("testing");

  return (
    <UserInfoContext.Provider value={{ userName, test, setUserName }}>
      {children}
    </UserInfoContext.Provider>
  );
};
