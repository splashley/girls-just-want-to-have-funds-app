import React from "react";
import useStickyState from "./useLocalStorageHook";

export const UserInfoContext = React.createContext(null);

export const UserInfoContextProvider = ({ children }) => {
  const [userName, setUserName] = useStickyState("", "userName");
  const [allowance, setAllowance] = useStickyState("", "allowance");
  const [amountToSave, setAmountToSave] = useStickyState("", "amountToSave");
  const [goal, setGoal] = useStickyState("", "goal");
  const [hasAccount, setHasAccount] = useStickyState(false, "hasVisited");
  const [amountsaved, setAmountSaved] = useStickyState("", "amountSaved");
  const [avatarUrl, setAvatarUrl] = useStickyState("", "avatarUrl");

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
        hasAccount,
        setHasAccount,
        amountsaved,
        setAmountSaved,
        avatarUrl,
        setAvatarUrl,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
