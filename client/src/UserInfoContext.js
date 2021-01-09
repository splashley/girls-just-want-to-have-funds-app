import React from "react";
import useStickyState from "./useLocalStorageHook";

export const UserInfoContext = React.createContext(null);

export const UserInfoContextProvider = ({ children }) => {
  const [userName, setUserName] = useStickyState("", "userName");
  const [allowance, setAllowance] = useStickyState("", "allowance");
  const [amountToSave, setAmountToSave] = useStickyState("", "amountToSave");
  const [goal, setGoal] = useStickyState("", "goal");

  return (
    <UserInfoContext.Provider
      value={{
        userName,
        setUserName,
        allowance,
        setAllowance,
        amountToSave,
        setAmountToSave,
        goal,
        setGoal,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
